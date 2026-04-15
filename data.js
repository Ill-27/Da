// ==========================================
// БАЗА ДАННЫХ АРТАНАТА
// ==========================================

const ARTANAT_DB = {
    
    // ---- ТВОЯ МУЗЫКА ДЛЯ ФОНА ----
    // Загружай песни в репозиторий и добавляй пути сюда
    music: [
        "media/music/последняя_чаша.mp3",
        "media/music/track2.mp3",
        "media/music/track3.mp3"
    ],

    // ---- ВЕТКИ (ПАПКИ НА САЙТЕ) ----
    branches: [
        { tab: "arterrii", id: "the_last_chalice", name: { ru: "Последняя Чаша", en: "The Last Chalice", zh: "最后一尊圣杯" }, password: "" },
        { tab: "base", id: "serbian", name: { ru: "Сербский: 120 Песен", en: "Serbian: 120 Songs" }, password: "" },
        { tab: "arterrii", id: "dark_secrets", name: { ru: "Тайные мысли", en: "Dark Secrets" }, password: "dante" },
        { tab: "friends", id: "italian", name: { ru: "Итальянский: Глаголы", en: "Italian: Verbs" }, password: "" }
    ],

    // ---- ТВОИ СООБЩЕНИЯ ----
    posts: [
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
        },
        {
            branchId: "my_story",
            author: "Dante_Sogliano",
            date: "15.04.2026 14:00",
            // Если перевода нет, просто оставь русский, сайт покажет его по умолчанию
            text: {
                ru: "Звезды сегодня особенно яркие."
            },
            mediaUrl: "media/arterrii/image1.jpg", 
            mediaType: "image"
        }
    ]
};
