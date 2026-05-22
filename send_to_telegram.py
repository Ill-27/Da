import os
import time
import requests
import json
import subprocess

BOT_TOKEN = os.environ.get('BOT_TOKEN')
CHAT_ID = os.environ.get('CHAT_ID')

# 1. Читаем data.js через встроенный Node.js (чтобы безопасно извлечь все тексты и ссылки)
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

# Посты идут от новых к старым. Переворачиваем, чтобы начать публикацию со старых (001, 002...)
posts.reverse() 
new_last_id = last_id
url_base = f"https://api.telegram.org/bot{BOT_TOKEN}"

for post in posts:
    # Достаем цифру из "post_053"
    post_num = int(post['id'].split('_')[1])
    
    if post_num > last_id:
        text_en = post.get('text', {}).get('en', '').strip()
        
        # Формируем красивую подпись с автором и веткой
        caption = f"👤 <b>{post['author']}</b> | 📂 <i>{post['branchId']}</i>"
        if text_en:
            caption += f"\n\n{text_en}"
            
        # Телеграм не разрешает текст под картинкой больше 1024 символов. 
        # Если стихотворение длинное, отправляем картинку отдельно, а стих — следующим сообщением.
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
                # Галерея (Telegram разрешает максимум 10 файлов за раз, поэтому обрезаем)
                media_list = media_list[:10] 
                files = {}
                media = []
                for i, m in enumerate(media_list):
                    m_url = m['url']
                    m_type = "video" if m['type'] == "video" else "photo"
                    
                    if m_url.startswith('http'):
                        media.append({"type": m_type, "media": m_url, "caption": caption_for_media if i==0 else "", "parse_mode": "HTML"})
                    else:
                        file_key = f"file{i}"
                        files[file_key] = open(m_url, 'rb')
                        media.append({"type": m_type, "media": f"attach://{file_key}", "caption": caption_for_media if i==0 else "", "parse_mode": "HTML"})
                
                requests.post(f"{url_base}/sendMediaGroup", data={"chat_id": CHAT_ID, "media": json.dumps(media)}, files=files)
                for f in files.values():
                    f.close()
                    
            elif media_url:
                # Одно фото или видео
                endpoint = "sendVideo" if media_type == "video" else "sendPhoto"
                file_param = "video" if media_type == "video" else "photo"
                data = {"chat_id": CHAT_ID, "caption": caption_for_media, "parse_mode": "HTML"}
                
                if media_url.startswith('http'):
                    # Если ссылка из интернета (например archive.org)
                    data[file_param] = media_url
                    requests.post(f"{url_base}/{endpoint}", data=data)
                else:
                    # Если файл лежит в папке media/ прямо на GitHub
                    with open(media_url, 'rb') as f:
                        requests.post(f"{url_base}/{endpoint}", data=data, files={file_param: f})
            
            # Если нет картинки, или текст был слишком длинный для подписи
            if send_text_separately or not (media_url or media_list):
                requests.post(f"{url_base}/sendMessage", data={"chat_id": CHAT_ID, "text": caption, "parse_mode": "HTML"})
                
        except Exception as e:
            print(f"Ошибка отправки поста {post['id']}: {e}")
            
        new_last_id = post_num
        time.sleep(4) # Пауза 4 секунды между постами, чтобы Телеграм не заблокировал за спам

# 3. Сохраняем номер последнего поста
with open('LAST_POST_ID.txt', 'w') as f:
    f.write(str(new_last_id))
