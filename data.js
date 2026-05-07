// ==========================================
// БАЗА ДАННЫХ АРТАНАТА
// ==========================================

const ARTANAT_DB = {
    
    // ---- ТВОЯ МУЗЫКА ДЛЯ ФОНА ----
    music: [
        "media/music/последняя_чаша.mp3",
        "media/music/l'ultimo_calice.mp3",
        "media/music/the_only_way.mp3",
        "media/music/morning_comes.mp3",
        "media/music/the_curse.mp3",
    ],

    // ---- ВЕТКИ (ПАПКИ НА САЙТЕ) ----
    branches: [
        // Обычная папка без пароля в разделе arterries
        { tab: "arterrii", id: "the_last_chalice", name: { ru: "Последняя Чаша", en: "The Last Chalice", zh: "最后一尊圣杯" }, password: "" },
        
        // Пример ЗАПАРОЛЕННОЙ папки в разделе base (пароль: 1234)
        { tab: "base", id: "secret_diary", name: { ru: "Личные Записи", en: "Secret Diary" }, password: "1234" },
        
        // Вспомогательная запись для ленты Feed
        { tab: "feed", id: "feed", name: "", password: "" }
    ],

    // ---- ТВОИ СООБЩЕНИЯ ----
    posts: [
        {
            id: "post_015",
            branchId: "feed",
            author: "Dante_Sogliano",
            date: "06.05.2026 19:53",
            text: { 
                en: `Another day, another hollow gain
Another day of digging in the dirt
The shadow shackles pull is real
The shadow shackles, how I live
If the metal breaks the spirit
What is left of me to keep
A king, a king of ghosts who never sleeps

​Que haces en tu dia a dia (dia a dia)
Cargo con la maldicion (maldicion)
Es un camino sin salvacion (sin salvacion)
El hambre dicta mi respirar (mi respirar)
Si no hay monedas no soy dueño de mi fe, asi que si
La maldicion es inmortal

​Šta radiš u običan dan (običan dan)
Gušim kletvu bez smrti (bez smrti)
U krug me vrti, krade san (krade san)
Robom novca u krug me vrti (u krug vrti)
Al' bez novca ne mogu da živim
Zato kletva nema svoj kraj

​The shadow shackle is immortal
It feeds on me and my own kind
Nothing remains of what was mine
Except the hunger and the grind

​Rob novca (rob novca)
Sin salvacion (sin salvacion)
The curse (the curse)`                
                  }
        },
        {
            id: "post_014", // ПРИМЕР: Пост с галереей из 3 картинок (в папке the_last_chalice)
            branchId: "feed", 
            author: "Dante_Sogliano",
            date: "06.05.2026 19:00",
            text: { en: "" },
            mediaList: [ // <--- Используй mediaList для загрузки нескольких файлов
                { url: "media/feed/curse/Screenshot_20260507_120257_Video Player.jpg", type: "image" },
                { url: "media/feed/curse/Screenshot_20260507_120039_Video Player.jpg", type: "image" },
                { url: "media/feed/curse/Screenshot_20260507_120108_Video Player.jpg", type: "image" },
                { url: "media/feed/curse/Screenshot_20260507_141043_Video Player.jpg", type: "image" },
                { url: "media/feed/curse/Screenshot_20260507_141115_Video Player.jpg", type: "image" },
                { url: "media/feed/curse/Screenshot_20260507_141145_Video Player.jpg", type: "image" },
                { url: "media/feed/curse/Screenshot_20260507_141238_Video Player.jpg", type: "image" },
                { url: "media/feed/curse/Screenshot_20260507_141308_Video Player.jpg", type: "image" },
                { url: "media/feed/curse/Screenshot_20260507_141412_Video Player.jpg", type: "image" },
                { url: "media/feed/curse/Screenshot_20260507_141459_Video Player.jpg", type: "image" },
                { url: "media/feed/curse/Screenshot_20260507_141519_Video Player.jpg", type: "image" },
                { url: "media/feed/curse/Screenshot_20260507_141628_Video Player.jpg", type: "image" },
                { url: "media/feed/curse/Screenshot_20260507_141650_Video Player.jpg", type: "image" },
                { url: "media/feed/curse/Screenshot_20260507_141719_Video Player.jpg", type: "image" },
                { url: "media/feed/curse/Screenshot_20260507_141807_Video Player.jpg", type: "image" },
                { url: "media/feed/curse/Screenshot_20260507_150055_Video Player.jpg", type: "image" },
                { url: "media/feed/curse/Screenshot_20260507_150147_Video Player.jpg", type: "image" },
                { url: "media/feed/curse/Screenshot_20260507_150220_Video Player.jpg", type: "image" },
                { url: "media/feed/curse/Screenshot_20260507_150253_Video Player.jpg", type: "image" },
                { url: "media/feed/curse/Screenshot_20260507_150321_Video Player.jpg", type: "image" },
                { url: "media/feed/curse/Screenshot_20260507_150406_Video Player.jpg", type: "image" },
                { url: "media/feed/curse/Screenshot_20260507_150440_Video Player.jpg", type: "image" },
                { url: "media/feed/curse/Screenshot_20260507_150511_Video Player.jpg", type: "image" },
                { url: "media/feed/curse/Screenshot_20260507_150603_Video Player.jpg", type: "image" }
            ]
        },
        {
            id: "post_013",
            branchId: "feed", // Попадет ТОЛЬКО в ленту Feed
            author: "Dante_Sogliano",
            date: "06.05.2026 18:23",
            text: { en: "" }, 
            // Старый формат (mediaUrl) тоже будет работать без проблем
            mediaUrl: "https://ia903100.us.archive.org/15/items/lv_0_20260507094251/lv_0_20260507094251.mp4",
            mediaType: "video"
        },
        {
            id: "post_012",
            branchId: "feed",
            author: "Dante_Sogliano",
            date: "06.05.2026 16:59",
            text: { 
                en: `What do you do on a normal day?
I try to kill the deathless curse.
It makes me blind and leads astray,
From things I want, slave to a purse.
But if there's no purse, I can't live my way 
So yes, the curse is truly deathless.

​¿Qué haces en tu día a día?
Intento matar la maldición.
Me ciega y me extravía,
Esclavo del dinero sin salvación.
​Pero sin dinero no vivo como quiero,
Así que sí, la maldición es inmortal.

Šta radiš u običan dan?
Ja gušim kletvu bez smrti.
Skreće mi put i krade san,
Rob novca, u krug me vrti.
Al' bez novca ne mogu da živim
Zato kletva nema svoj kraj.`                
                  }
        },
        {
            id: "post_011",
            branchId: "feed",
            author: "Dante_Sogliano",
            date: "06.05.2026 16:49",
            text: { en: "" }, 
            mediaUrl: "media/Screenshot_20260506_162640_Video Player.jpg", 
            mediaType: "image"
        },
        {
            id: "post_010",
            branchId: "feed",
            author: "Dante_Sogliano",
            date: "05.05.2026 19:49",
            text: { en: "" }, 
            mediaUrl: "media/Screenshot_20260505_194551_Video Player.jpg", 
            mediaType: "image"
        },
        {
            id: "post_009",
            branchId: "feed",
            author: "Dante_Sogliano",
            date: "05.05.2026 19:43",
            text: { en: "" }, 
            mediaUrl: "media/Screenshot_20260505_194612_Video Player.jpg", 
            mediaType: "image"
        },
        {
            id: "post_008",
            branchId: "feed",
            author: "Dante_Sogliano",
            date: "05.05.2026 19:33",
            text: { en: "" }, 
            mediaUrl: "https://ia600704.us.archive.org/24/items/lv_0_20260505184931/lv_0_20260505184931.mp4",
            mediaType: "video"
        },
        {
            id: "post_007",
            branchId: "feed",
            author: "Dante_Sogliano",
            date: "05.05.2026 19:03",
            text: {
                en: `Morning comes, I go away,
Among all things, we lose our way.
Again, you try to reach the doors,
But it makes no sense at empty shores.

Despunta el alba, yo sigo mi camino,
Entre tantas cosas, perdemos el destino.
Intentas de nuevo abrir esas puertas,
Pero no hay sentido en playas desiertas.

​Свиће нам јутро, ја одлазим тамо,
Међу свим стварима, ми лутамо само.
Ти опет се трудиш да отвориш двери,
Ал' на пустој обали ништа не трепери.

晨光降临，我转身而退 (chén guāng jiàng lín, wǒ zhuǎn shēn ér tuì)
万物之中，我们迷失方位 (wàn wù zhī zhōng, wǒ men mí shī fāng wèi)
你再一次，试图触及那扇门 (nǐ zài cì, shì tú chù jí nà shàn mén)
空旷岸边，一切毫无意义了无痕 (kōng kuàng àn biān, yī qiè háo wú yì yì liǎo wú hén)`
}
        },
        {
            id: "post_006", 
            branchId: "feed",
            author: "Dante_Sogliano",
            date: "22.04.2026 18:25",
            text: { en: "" }, 
            mediaUrl: "media/lv_0_20260422184842.mp4", 
            mediaType: "video" 
        },
        {
            id: "post_005",
            branchId: "feed",
            author: "Dante_Sogliano",
            date: "22.04.2026 18:22",
            text: { en: "" }, 
            mediaUrl: "media/Screenshot_20260422_183239_Video Player.jpg", 
            mediaType: "image"
        },
        {
            id: "post_004",
            branchId: "feed",
            author: "Dante_Sogliano",
            date: "22.04.2026 18:21",
            text: { en: "" }, 
            mediaUrl: "media/Screenshot_20260422_183204_Video Player.jpg", 
            mediaType: "image"
        },
        {
            id: "post_003",
            branchId: "feed",
            author: "Dante_Sogliano",
            date: "22.04.2026 18:19",
            text: {
                en: `Sometimes I think, what is this all for... why do something so dangerous, meaningless, and difficult, but then I remember that out of everything, I love only you, and this is the only way to be with you.

A veces pienso para qué es esto... por qué hacer algo tan peligroсо, sin sentido y difícil, pero luego recuerdo que, de todo, solo te amo a ti y esta es la única forma de estar contigo.

Ponekad mislim, čemu sve ovo... zašto raditi nešto tako opasno, besmisleno i teško, ali onda se setim da od svega volim samo tebe i to je jedini način da budem s tobom.

有时候我会想，这是为了什么……为什么要去做如此危险、毫无意义又艰难的事，但随后我就会想起，在这一切之中我只爱你，而这是能和你在一起의唯一方法。`
            }
        },
        {
            id: "post_002",
            branchId: "feed",
            author: "Dante_Sogliano",
            date: "22.04.2026 18:07",
            text: { en: "" }, 
            mediaUrl: "media/Screenshot_20260422_183108_Video Player.jpg", 
            mediaType: "image" 
        },
         {
            id: "post_001",
            branchId: "feed",
            author: "Dante_Sogliano",
            date: "22.04.2026 18:00",
            text: { en: "" }, 
            mediaUrl: "https://ia601906.us.archive.org/14/items/the-only-way_202604/lv_0_20260422171305.ia.mp4",
            mediaType: "video"
         }
    ]
};
 
