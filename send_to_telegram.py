import os
import time
import requests
import json
import subprocess

BOT_TOKEN = os.environ.get('BOT_TOKEN')
CHAT_ID = os.environ.get('CHAT_ID')

# Функция для надежного скачивания файлов
def download_file(url, local_filename):
    headers = {'User-Agent': 'Mozilla/5.0'}
    with requests.get(url, stream=True, headers=headers) as r:
        r.raise_for_status()
        with open(local_filename, 'wb') as f:
            for chunk in r.iter_content(chunk_size=8192):
                f.write(chunk)
    return local_filename

# Функция автоматического умного сжатия под лимит Телеграма (до 45 МБ)
def compress_video(input_path, output_path):
    print(f"🎬 Запуск сжатия для файла: {input_path}")
    
    # Узнаем длительность видео с помощью ffprobe
    duration_cmd = [
        "ffprobe", "-v", "error", 
        "-show_entries", "format=duration", 
        "-of", "default=noprint_wrappers=1:nokey=1", 
        input_path
    ]
    res = subprocess.run(duration_cmd, capture_output=True, text=True)
    
    try:
        duration = float(res.stdout.strip())
    except Exception:
        duration = 300  # Если не удалось определить, берем 5 минут как запасной вариант
    
    # Целевой размер — 44 МБ (чтобы точно уложиться в 50 МБ с запасом)
    # 44 МБ * 1024 * 1024 * 8 = общая емкость в битах
    target_total_bits = 44 * 1024 * 1024 * 8
    target_bitrate = int(target_total_bits / duration)
    
    # Выделяем 128 кбит/с на звук, остальное на видео
    audio_bitrate = 128 * 1024
    video_bitrate = target_bitrate - audio_bitrate
    
    # Защита: битрейт видео не должен опускаться ниже 150 кбит/с
    if video_bitrate < 150 * 1024:
        video_bitrate = 150 * 1024

    # Команда сжатия в один проход с жестким ограничением битрейта
    ffmpeg_cmd = [
        "ffmpeg", "-y", "-i", input_path,
        "-b:v", str(video_bitrate),
        "-maxrate", str(video_bitrate),
        "-bufsize", str(video_bitrate * 2),
        "-c:v", "libx264",
        "-preset", "fast",
        "-pix_fmt", "yuv420p",
        "-c:a", "aac",
        "-b:a", "128k",
        output_path
    ]
    
    subprocess.run(ffmpeg_cmd)
    print(f"✅ Видео успешно сжато. Новый размер: {os.path.getsize(output_path) / (1024*1024):.2f} МБ")

# 1. Читаем data.js
node_script = """
const fs = require('fs');
const code = fs.readFileSync('data.js', 'utf8');
let ARTANAT_DB;
eval(code.replace('const ARTANAT_DB', 'ARTANAT_DB'));
console.log(JSON.stringify(ARTANAT_DB.posts));
"""
with open('parse_temp.js', 'w', encoding='utf-8') as f:
    f.write(node_script)

result = subprocess.run(['node', 'parse_temp.js'], capture_output=True, text=True)
posts = json.loads(result.stdout)

# 2. Читаем LAST_POST_ID.txt
try:
    with open('LAST_POST_ID.txt', 'r') as f:
        last_id = int(f.read().strip())
except FileNotFoundError:
    last_id = 0

posts.reverse() 
new_last_id = last_id
url_base = f"https://api.telegram.org/bot{BOT_TOKEN}"

for post in posts:
    post_num = int(post['id'].split('_')[1])
    
    if post_num > last_id:
        text_en = post.get('text', {}).get('en', '').strip()
        
        caption = f"👤 <b>{post['author']}</b> | 📂 <i>{post['branchId']}</i>"
        if text_en:
            caption += f"\n\n{text_en}"
            
        send_text_separately = False
        if len(caption) > 1000 and (post.get('mediaUrl') or post.get('mediaList')):
            send_text_separately = True
            caption_for_media = f"👤 <b>{post['author']}</b> | 📂 <i>{post['branchId']}</i>"
        else:
            caption_for_media = caption

        media_url = post.get('mediaUrl')
        media_type = post.get('mediaType')
        media_list = post.get('mediaList')

        try:
            if media_list:
                media_list = media_list[:10] 
                files = {}
                media = []
                temp_files = []
                
                for i, m in enumerate(media_list):
                    m_url = m['url']
                    m_type = "video" if m['type'] == "video" else "photo"
                    file_key = f"file{i}"
                    
                    if m_url.startswith('http'):
                        temp_name = f"temp_{i}.{'mp4' if m_type == 'video' else 'jpg'}"
                        download_file(m_url, temp_name)
                        
                        # Проверяем, нужно ли сжимать видео в галерее
                        if m_type == "video" and os.path.getsize(temp_name) > 49 * 1024 * 1024:
                            compressed_name = f"compressed_{i}.mp4"
                            compress_video(temp_name, compressed_name)
                            os.remove(temp_name)
                            temp_name = compressed_name
                            
                        temp_files.append(temp_name)
                        files[file_key] = open(temp_name, 'rb')
                    else:
                        # Локальный файл из репозитория
                        working_file = m_url
                        if m_type == "video" and os.path.getsize(working_file) > 49 * 1024 * 1024:
                            compressed_name = f"compressed_local_{i}.mp4"
                            compress_video(working_file, compressed_name)
                            temp_files.append(compressed_name)
                            working_file = compressed_name
                            
                        files[file_key] = open(working_file, 'rb')
                        
                    media.append({"type": m_type, "media": f"attach://{file_key}", "caption": caption_for_media if i==0 else "", "parse_mode": "HTML"})
                
                requests.post(f"{url_base}/sendMediaGroup", data={"chat_id": CHAT_ID, "media": json.dumps(media)}, files=files)
                
                for f in files.values():
                    f.close()
                for t_file in temp_files:
                    if os.path.exists(t_file):
                        os.remove(t_file)
                    
            elif media_url:
                endpoint = "sendVideo" if media_type == "video" else "sendPhoto"
                file_param = "video" if media_type == "video" else "photo"
                data = {"chat_id": CHAT_ID, "caption": caption_for_media, "parse_mode": "HTML"}
                
                if media_url.startswith('http'):
                    temp_name = f"temp_single.{'mp4' if media_type == 'video' else 'jpg'}"
                    download_file(media_url, temp_name)
                    
                    # Проверяем размер одиночного видеоклипа
                    if media_type == "video" and os.path.getsize(temp_name) > 49 * 1024 * 1024:
                        compressed_name = "compressed_single.mp4"
                        compress_video(temp_name, compressed_name)
                        os.remove(temp_name)
                        temp_name = compressed_name
                        
                    with open(temp_name, 'rb') as f:
                        requests.post(f"{url_base}/{endpoint}", data=data, files={file_param: f})
                    os.remove(temp_name)
                else:
                    # Локальный одиночный файл
                    working_file = media_url
                    is_temp = False
                    if media_type == "video" and os.path.getsize(working_file) > 49 * 1024 * 1024:
                        compressed_name = "compressed_local_single.mp4"
                        compress_video(working_file, compressed_name)
                        working_file = compressed_name
                        is_temp = True
                        
                    with open(working_file, 'rb') as f:
                        requests.post(f"{url_base}/{endpoint}", data=data, files={file_param: f})
                    if is_temp:
                        os.remove(working_file)
            
            if send_text_separately or not (media_url or media_list):
                requests.post(f"{url_base}/sendMessage", data={"chat_id": CHAT_ID, "text": caption, "parse_mode": "HTML"})
                
        except Exception as e:
            print(f"Ошибка отправки поста {post['id']}: {e}")
            
        new_last_id = post_num
        time.sleep(4)

# 3. Сохраняем номер последнего поста
with open('LAST_POST_ID.txt', 'w') as f:
    f.write(str(new_last_id))
