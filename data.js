// ==========================================
// БАЗА ДАННЫХ АРТАНАТА
// ==========================================

const ARTANAT_DB = {
    
    // ---- ТВОЯ МУЗЫКА ДЛЯ ФОНА ----
    music: [
        "media/music/последняя_чаша.mp3",
        "media/music/l'ultimo_calice.mp3",
    ],

    // ---- ВЕТКИ (ПАПКИ НА САЙТЕ) ----
    branches: [
        { tab: "arterrii", id: "the_last_chalice", name: { ru: "Последняя Чаша", en: "The Last Chalice", zh: "最后一尊圣杯" }, password: "" },
        { tab: "feed", id: "feed", name: "", password: "" }
    ],

    // ---- ТВОИ СООБЩЕНИЯ ----
    posts: [
        {
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
            branchId: "feed",
            author: "Dante_Sogliano",
            date: "22.04.2026 18:07",
            text: { en: "" }, 
             // Путь к файлу: папка media -> папка arterrii -> файл image1.jpg
            mediaUrl: "media/IMG_20260420_214538_184.jpg", 
            mediaType: "image" // "image", "video" или "audio"
        },
         {
            branchId: "feed",
            author: "Dante_Sogliano",
            date: "22.04.2026 18:00",
            text: { en: "" }, 
            mediaUrl: "https://archive.org/details/the-only-way_202604",
            mediaType: "video"
         }
    ]
};
