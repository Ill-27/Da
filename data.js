// ==========================================
// БАЗА ДАННЫХ АРТАНАТА
// ==========================================

const ARTANAT_DB = {
    
    // ---- ВЕТКИ (ПАПКИ НА САЙТЕ) ----
    branches: [
        { tab: "arterrii", id: "the_last_chalice", name: "Последняя Чаша", password: "" },
        { tab: "base", id: "serbian", name: "Сербский: 120 Песен", password: "" },
        { tab: "arterrii", id: "dark_secrets", name: "Тайные мысли", password: "dante" },
        { tab: "friends", id: "italian", name: "Итальянский: Глаголы", password: "" }
    ],

    // ---- ТВОИ СООБЩЕНИЯ ----
    // Новые сообщения добавляй ВЕРХ списка
    posts: [
        {
            branchId: "the_last_chalice", // <- Исправлено: точное совпадение с id ветки
            author: "Dante_Sogliano",
            date: "15.04.2026 13:48",
            text: "Последняя чаша...",
            mediaUrl: "media/arterrii/the_last_chalice/VID_20260413_073310_438.mp4", 
            mediaType: "video"
        },
        {
            branchId: "my_story",
            author: "Dante_Sogliano",
            date: "15.04.2026 14:00",
            text: "Первая картинка из папки media. Все работает идеально.",
            mediaUrl: "media/arterrii/image1.jpg", 
            mediaType: "image"
        }
    ]
};
