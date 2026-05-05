// ==========================================
// БАЗА ДАННЫХ АРТАНАТА
// ==========================================

const ARTANAT_DB = {
    
    // ---- ТВОЯ МУЗЫКА ДЛЯ ФОНА ----
    music: [
        "media/music/последняя_чаша.mp3",
        "media/music/l'ultimo_calice.mp3",
        "media/music/the_only_way.mp3",
    ],

    // ---- ВЕТКИ (ПАПКИ НА САЙТЕ) ----
    branches: [
        { tab: "arterrii", id: "the_last_chalice", name: { ru: "Последняя Чаша", en: "The Last Chalice", zh: "最后一尊圣杯" }, password: "" },
        { tab: "feed", id: "feed", name: "", password: "" }
    ],

    // ---- ТВОИ СООБЩЕНИЯ ----
    posts: [
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
},
        {
            id: "post_006", // <--- Уникальный ID для комментариев
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

Иногда я думаю, зачем это... зачем делать что-то столь опасное, бессмысленное и тяжёлое, но потом вспоминаю, что из всего люблю лишь тебя и это единственный способ быть с тобой.

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
