// ==========================================
// БАЗА ДАННЫХ АРТАНАТА
// ==========================================

const ARTANAT_DB = {
    
    // ---- ВЕТКИ (ПАПКИ НА САЙТЕ) ----
    branches: [
        { tab: "arterrii", id: "my_story", name: "Начало Пути", password: "" },
        { tab: "base", id: "serbian", name: "Сербский: 120 Песен", password: "" },
        { tab: "arterrii", id: "dark_secrets", name: "Тайные мысли", password: "dante" }
    ],

    // ---- ТВОИ СООБЩЕНИЯ ----
    // Новые сообщения добавляй ВЕРХ списка
    posts: [
        {
            branchId: "my_story",
            author: "Dante_Sogliano",
            date: "15.04.2026 14:00",
            text: "Первая картинка из папки media. Все работает идеально.",
            // Путь к файлу: папка media -> папка arterrii -> файл image1.jpg
            mediaUrl: "media/arterrii/image1.jpg", 
            mediaType: "image" // "image", "video" или "audio"
        },
        {
            branchId: "serbian",
            author: "Dante_Sogliano",
            date: "14.04.2026 21:04",
            text: "Записала первую песню для запоминания глаголов.",
            mediaUrl: "media/serbian/song1.mp3", 
            mediaType: "audio"
        },
        {
            branchId: "my_story",
            author: "Dante_Sogliano",
            date: "13.04.2026 12:00",
            text: "Просто текстовая мысль, без картинки. Оставим кавычки пустыми.",
            mediaUrl: "", 
            mediaType: ""
        }
    ]
};
