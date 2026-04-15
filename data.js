// ==========================================
// БАЗА ДАННЫХ АРТАНАТА
// ==========================================

const ARTANAT_DB = {
    
    // ---- ТВОЯ МУЗЫКА ДЛЯ ФОНА ----
    // Загружай песни в репозиторий и добавляй пути сюда
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
            date: "15.04.2026 21:35",
            // Для перевода пиши текст так:
            text: {
                en: "Sometimes I think, what is this all for... why do something so dangerous, meaningless, and difficult, but then I remember that out of everything, I love only you, and this is the only way to be with you.",
                es: "A veces pienso para qué es esto... por qué hacer algo tan peligroso, sin sentido y difícil, pero luego recuerdo que, de todo, solo te amo a ti y esta es la única forma de estar contigo.",
                ru: "Иногда я думаю, зачем это... зачем делать что-то столь опасное, бессмысленное и тяжёлое, но потом вспоминаю, что из всего люблю лишь тебя и это единственный способ быть с тобой.",
                it: "A volte mi chiedo a che scopo... perché fare qualcosa di così pericoloso, insensato e difficile, ma poi ricordo che tra tutto amo solo te, e questo è l'unico modo per stare con te.",
                sr: "Ponekad mislim, čemu sve ovo... zašto raditi nešto tako opasno, besmisleno i teško, ali onda se setim da od svega volim samo tebe i to je jedini način da budem s tobom.",
                zh: "有时候我会想，这是为了什么……为什么要去做如此危险、毫无意义又艰难的事，但随后我就会想起，在这一切之中我只爱你，而这是能和你在一起的唯一方法。"
        },
        {
            branchId: "the_last_chalice",
            author: "Dante_Sogliano",
            date: "15.04.2026 13:48",
            // Для перевода пиши текст так:
            text: {
                ru: "Последняя чаша выпита до дна...",
                en: "The last chalice has been drained...",
                it: "L'ultimo calice è stato svuotato...",
                sr: "Последњи пехар је испијен..."
            },
            mediaUrl: "media/arterrii/the_last_chalice/VID_20260413_073310_438.mp4",
            mediaType: "video"
        }
    ]
};
