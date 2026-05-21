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
        "media/music/The_color_of_bone.mp3",
        "media/music/El_color_de_hueso.mp3",
        "media/music/boja_kosti.mp3"
    ],

    // ---- ВЕТКИ (ПАПКИ НА САЙТЕ) ----
    branches: [
        // Обычная папка без пароля в разделе arterries
        { tab: "arterrii", id: "arterrii", name: "", password: "" },
        
        { tab: "arterrii", id: "the_last_chalice", name: { en: "The Last Chalice" }, password: "" },
        
        { tab: "arterrii", id: "the_color_of_bone", name: { en: "The Color of Bone", es: "El color de Hueso" }, password: "" },
        
        // Пример ЗАПАРОЛЕННОЙ папки в разделе base (пароль: 1234)
        { tab: "base", id: "secret_diary", name: { ru: "Личные Записи", en: "Secret Diary" }, password: "1234" },

        { tab: "base", id: "español", name: { ru: "Испанский", en: "Spanish", es: "Español" }, password: "" },
        
        // Вспомогательная запись для ленты Feed
        { tab: "feed", id: "feed", name: "", password: "" }
    ],

    // ---- ТВОИ СООБЩЕНИЯ ----
    posts: [
                {
            id: "post_team_001",
            branchId: "team_works", // <--- Это отправит пост прямо в новую вкладку TEAM WORKS
            author: "Syolana",       // <--- Укажи точное имя автора
            date: "19.05.2026 22:00",
            text: { 
                en: "First clip from the creative director." 
            }, 
            mediaUrl: "https://ia600503.us.archive.org/33/items/lv_0_20260521150111/lv_0_20260521150111.mp4", 
            mediaType: "video",
            showInFeed: true        // <--- Если true, пост также покажется на главной в Feed
        },
        {
            id: "post_048",
            branchId: "the_color_of_bone",
            author: "Dante_Sogliano",
            date: "19.05.2026 17:07",
            text: { en: "" }, 
            mediaUrl: "media/arterrii/the_color_of_bone/boja/Screenshot_20260519_185613_Video Player.jpg", 
            mediaType: "image",
            showInFeed: true
        },
        {
            id: "post_047",
            branchId: "the_color_of_bone",
            author: "Dante_Sogliano",
            date: "19.05.2026 17:03",
            text: { en: "" }, 
            mediaUrl: "media/arterrii/the_color_of_bone/boja/Screenshot_20260519_185512_Video Player.jpg", 
            mediaType: "image",
            showInFeed: true
        },
        {
            id: "post_046",
            branchId: "the_color_of_bone",
            author: "Dante_Sogliano",
            date: "19.05.2026 17:02",
            text: { en: "" }, 
            mediaUrl: "media/arterrii/the_color_of_bone/boja/Screenshot_20260519_185310_Video Player.jpg", 
            mediaType: "image",
            showInFeed: true
        },
        {
            id: "post_045",
            branchId: "the_color_of_bone",
            author: "Dante_Sogliano",
            date: "19.05.2026 16:59",
            text: { 
                en: `Моје ће речи к'о камен што пада у водени мир
Што се подвлачи, повлачи на дно све тајне града
У бездан где разум немоћно крвари
У цркву ћу ући к'о сенка и речи ће постати дим
И речи ће постати дим

​Са тамјаном кад се исплету
У ништавило ћу отићи с њим
Где људи не иду, отићи ћу с њим
​На свадби сам непозван гост
Млада ми беше само страна
Хаљина бела, хладна к'о кост

​Барона сад овде венчају
И скупи се сав тај виши круг
Они што смеју се, што владају
Нек' данас ми плате крвави дукат
Против је оваквог савеза
Нека каже ил' чува свој мир
Свештеник гласом прекинуће пир

​И превише она је снежна
У тријумфу сивог безнађа
У жалости срушене нађе

​Кад кренем низ пролаз у цркви
Нико да смета не би смео
За тај суд ја се спремао дуго
Али она тад подиже вео

​И стихови к'о ситне кости
У грлу ми пресеку дах
Не могу ни слова да кажем
Ал' тама већ узима мах

Мој стих беше оружје моћно
И мада је глас непослушан
​Не могу спасити нас

Не могу спасити нас

​Речи су постале дим
Камен је пао на дно
Више нема нас`                
                  },
            showInFeed: true
        },
        {
            id: "post_044",
            branchId: "the_color_of_bone",
            author: "Dante_Sogliano",
            date: "19.05.2026 16:57",
            text: { en: "" }, 
            mediaUrl: "media/arterrii/the_color_of_bone/boja/Screenshot_20260519_185156_Video Player.jpg", 
            mediaType: "image",
            showInFeed: true
        },
        {
            id: "post_043",
            branchId: "the_color_of_bone",
            author: "Dante_Sogliano",
            date: "19.05.2026 16:57",
            text: { en: "" }, 
            mediaUrl: "media/arterrii/the_color_of_bone/boja/Screenshot_20260519_185136_Video Player.jpg", 
            mediaType: "image",
            showInFeed: true
        },
        {
            id: "post_042",
            branchId: "the_color_of_bone",
            author: "Dante_Sogliano",
            date: "19.05.2026 16:54",
            text: { en: "" }, 
            mediaUrl: "https://ia601401.us.archive.org/6/items/lv_0_20260519155251/lv_0_20260519155251.mp4",
            mediaType: "video",
            showInFeed: true
        },
        {
            id: "post_041",
            branchId: "the_color_of_bone",
            author: "Dante_Sogliano",
            date: "19.05.2026 16:48",
            text: { 
                en: `Moje će reči k'o kamen što pada u vodeni mir
Što se podvlači, povlači na dno sve tajne grada
U bezdan gde razum nemoćno krvari
U crkvu ću ući k'o senka i reči će postati dim
I reči će postati dim

​Sa tamjanom kad se ispletu
U ništavilo ću otići s njim
Gde ljudi ne idu, otići ću s njim
​Na svadbi sam nepozvan gost
Mlada mi beše samo strana
Haljina bela, hladna k'o kost

​Barona sad ovde venčaju
I skupi se sav taj viši krug
Oni što smeju se, što vladaju
Nek' danas mi plate krvavi dukat
Protiv je ovakvog saveza
Neka kaže il' čuva svoj mir
Sveštenik glasom prekinuće pir

​I previše ona je snežna
U trijumfu sivog beznađa
U žalosti srušene nađe
​Kad krenem niz prolaz u crkvi
Niko da smeta ne bi smeo
Za taj sud ja se spremao dugo
Ali ona tad podiže veo

​I stihovi k'o sitne kosti
U grlu mi preseku dah
Ne mogu ni slova da kažem
Al' tama već uzima mah

Moj stih beše oružje moćno
I mada je glas neposlušan
​Ne mogu spasiti nas

Ne mogu spasiti nas

​Reči su postale dim
Kamen je pao na dno
Više nema nas`                
                  },
            showInFeed: true
        },
        {
            id: "post_040",
            branchId: "español",
            author: "Dante_Sogliano",
            date: "13.05.2026 21:59",
            text: { en: "" }, 
            mediaUrl: "media/basa/español/Screenshot_20260513_214722_Gallery.jpg", 
            mediaType: "image"
        },
        {
            id: "post_039",
            branchId: "español",
            author: "Dante_Sogliano",
            date: "13.05.2026 21:58",
            text: { en: "" }, 
            mediaUrl: "media/basa/español/Screenshot_20260513_213128_Video Player.jpg", 
            mediaType: "image"
        },
        {
            id: "post_038",
            branchId: "español",
            author: "Dante_Sogliano",
            date: "13.05.2026 21:58",
            text: { en: "" }, 
            mediaUrl: "media/basa/español/Screenshot_20260513_213241_Video Player.jpg", 
            mediaType: "image"
        },
        {
            id: "post_037",
            branchId: "español",
            author: "Dante_Sogliano",
            date: "13.05.2026 21:58",
            text: { en: "" }, 
            mediaUrl: "media/basa/español/Screenshot_20260513_213147_Video Player.jpg", 
            mediaType: "image"
        },
        {
            id: "post_036",
            branchId: "español",
            author: "Dante_Sogliano",
            date: "13.05.2026 21:58",
            text: { en: "" }, 
            mediaUrl: "media/basa/español/Screenshot_20260513_213259_Video Player.jpg", 
            mediaType: "image"
        },
        {
            id: "post_035",
            branchId: "español",
            author: "Dante_Sogliano",
            date: "13.05.2026 21:58",
            text: { en: "" }, 
            mediaUrl: "media/basa/español/Screenshot_20260513_213051_Video Player.jpg", 
            mediaType: "image"
        },
        {
            id: "post_034",
            branchId: "español",
            author: "Dante_Sogliano",
            date: "13.05.2026 21:58",
            text: { en: "" }, 
            mediaUrl: "media/basa/español/Screenshot_20260513_213017_Video Player.jpg", 
            mediaType: "image"
        },
        {
            id: "post_033",
            branchId: "español",
            author: "Dante_Sogliano",
            date: "13.05.2026 21:57",
            text: { en: "" }, 
            mediaUrl: "media/basa/español/Screenshot_20260513_194804_Video Player.jpg", 
            mediaType: "image"
        },
        {
            id: "post_032",
            branchId: "the_color_of_bone",
            author: "Dante_Sogliano",
            date: "13.05.2026 20:20",
            text: { en: "" }, 
            mediaUrl: "media/arterrii/the_color_of_bone/el_color/Screenshot_20260513_194744_Video Player.jpg", 
            mediaType: "image",
            showInFeed: true
        },
        {
            id: "post_031",
            branchId: "the_color_of_bone",
            author: "Dante_Sogliano",
            date: "13.05.2026 20:18",
            text: { en: "" }, 
            mediaUrl: "media/arterrii/the_color_of_bone/el_color/Screenshot_20260513_193639_Video Player.jpg", 
            mediaType: "image",
            showInFeed: true
        },
        {
            id: "post_030",
            branchId: "the_color_of_bone",
            author: "Dante_Sogliano",
            date: "13.05.2026 20:17",
            text: { en: "" }, 
            mediaUrl: "media/arterrii/the_color_of_bone/el_color/Screenshot_20260513_192930_Video Player.jpg", 
            mediaType: "image",
            showInFeed: true
        },
        {
            id: "post_029",
            branchId: "the_color_of_bone",
            author: "Dante_Sogliano",
            date: "12.05.2026 19:43",
            text: { en: "" }, 
            mediaUrl: "https://ia601606.us.archive.org/35/items/lv_0_20260512191420/lv_0_20260512191420.mp4",
            mediaType: "video",
            showInFeed: true
        },
        {
            id: "post_028",
            branchId: "the_color_of_bone",
            author: "Dante_Sogliano",
            date: "12.05.2026 19:39",
            text: { 
                en: `Mis palabras serán como rocas
Que caen en la faz de la mar,
Al fondo te arrastran sin duda, 
No dejan ni rastro al pasar.

​Entraré en la iglesia, un fantasma,
Y fantasmas mis dichos serán,
Mezclándose al humo de incienso,
Al abismo por siempre se irán.

​A esta gente yo no la conozco,
Soy un huésped que no se invitó,
La novia es del todo extranjera,
Y su traje cual hueso se vio.

​Pues demasiado blanco reluce,
En la gloria del día tan gris,
Con el luto de una esperanza,
Todo es hueco en mi alma infeliz.

​Se casa el barón en la nave,
La alta sociedad a sus pies,
Los que siempre se ríen y mandan,
Responder deberán a su vez.

​"¿Quién se opone a esta nueva unión?
¡Que lo diga o calle por Dios!"
Preguntará el cura sombrío,
Y los himnos tapará mi voz.

​Al marchar por el largo pasillo,
Nadie osará mi paso estorbar,
Tanto tiempo me armé para el juicio,
Mas ella su velo va a apartar...

​Y los versos cual huesos pequeños,
En el cuello se me han de trabar,
Ya no puedo decir ni palabra,
Mas la sombra ya supo acertar.

​Mi poema era el arma perfecta,
Para almas del templo matar,
Aunque mi voz de pronto es rebelde,
Ya no puedo a nosotros salvar...`                
                  },
            showInFeed: true
        },
        {
            id: "post_027",
            branchId: "arterrii",
            author: "Dante_Sogliano",
            date: "10.05.2026 19:47",
            text: { en: ""}, 
            mediaUrl: "media/arterrii/the_color_of_bone/Screenshot_20260510_181303_Video Player.jpg", 
            mediaType: "image",
            showInFeed: true
        },
        {
            id: "post_026",
            branchId: "the_color_of_bone",
            author: "Dante_Sogliano",
            date: "10.05.2026 19:30",
            text: { en: ""}, 
            mediaUrl: "media/arterrii/the_color_of_bone/Screenshot_20260510_181051_Video Player.jpg", 
            mediaType: "image",
            showInFeed: true
        },
        {
            id: "post_025",
            branchId: "the_color_of_bone",
            author: "Dante_Sogliano",
            date: "10.05.2026 19:24",
            text: { 
en: `More than revenge against your murderers, I just wanted to see you once more.
                
Más que venganza contra tus asesinos, solo quería verte una vez más.
                
Више од освете твојим убицама, само сам желео да те видим још једном.
                
比起向杀害你的凶手复仇，我只想再见你一面。(Bǐ qǐ xiàng shāhài nǐ de xiōngshǒu fùchóu, wǒ zhǐ xiǎng zài jiàn nǐ yī miàn.)`
            }, 
            showInFeed: true
        },
        {
            id: "post_024",
            branchId: "the_color_of_bone",
            author: "Dante_Sogliano",
            date: "10.05.2026 19:20",
            text: { en: "" }, 
            mediaUrl: "media/arterrii/the_color_of_bone/Screenshot_20260510_182230_Video Player.jpg", 
            mediaType: "image",
            showInFeed: true
        },
        {
            id: "post_023",
            branchId: "the_color_of_bone",
            author: "Dante_Sogliano",
            date: "10.05.2026 19:18",
            text: { en: "" }, 
            mediaUrl: "media/arterrii/the_color_of_bone/Screenshot_20260510_181400_Video Player.jpg", 
            mediaType: "image",
            showInFeed: true
        },
        {
            id: "post_022",
            branchId: "the_color_of_bone",
            author: "Dante_Sogliano",
            date: "10.05.2026 19:17",
            text: { en: "" }, 
            mediaUrl: "media/arterrii/the_color_of_bone/Screenshot_20260510_181116_Video Player.jpg", 
            mediaType: "image",
            showInFeed: true
        },
        {
            id: "post_021",
            branchId: "the_color_of_bone",
            author: "Dante_Sogliano",
            date: "10.05.2026 19:04",
            text: { en: "" }, 
            mediaUrl: "https://ia601506.us.archive.org/19/items/lv_0_20260514091849/lv_0_20260514091849.mp4",
            mediaType: "video",
            showInFeed: true
        },
        {
id: "post_020",
branchId: "the_color_of_bone",
author: "Dante_Sogliano",
date: "10.05.2026 18:58",
text: {
en: `My words will be falling like boulders,
Down into the watery space,
They’ll drag to the bottom beholders,
And vanish without any trace.

​I'll step in the church like a phantom,
My words will be ghostly and chill,
Entwined with the smoke of the censer,
To sink in the void and be still.

​I know not a soul in this chapel,
A guest uninvited and lone,
The bride is a total outsider,
Her dress is the color of bone.

​It shines far too white and too snowy,
Amidst the gray triumph of light,
In mourning of hopes that have fallen,
My soul is as empty as night.

​The baron is taking his vows now,
The highest elite are all met,
All those who are ruling and laughing,
Today must deliver their debt.

​"Who stands to oppose such a union?
Speak now or be silent and dim!"
The gloom-ridden priest will demand it,
My voice will eclipse every hymn.

​And pacing the length of the aisle now,
Not one will step up to assail,
I’ve planned for this judgment a lifetime,
But then she removes her white veil...

​The verses, like tiny sharp bone-chips,
Are stuck in my throat, stiff and stark,
I cannot pronounce a word further,
But darkness has locked on the mark.

​My verse was the absolute weapon,
To slaughter each soul in the nave,
Although my own voice is rebelling,
It's us I no longer can save...`
},
            showInFeed: true
        },
        {
            id: "post_019",
            branchId: "base",
            author: "Dante_Sogliano",
            date: "07.05.2026 06:08",
            text: { en: "" }, 
            showInFeed: false, // <--- ЭТОТ ПАРАМЕТР дублирует пост на главную страницу Feed
            mediaUrl: "media/feed/curse/Screenshot_20260507_150406_Video Player.jpg", 
            mediaType: "image"
        },
        {
            id: "post_018",
            branchId: "feed",
            author: "Dante_Sogliano",
            date: "06.05.2026 19:59",
            text: { en: "" }, 
            mediaUrl: "media/feed/curse/Screenshot_20260507_141628_Video Player.jpg", 
            mediaType: "image"
        },
        {
            id: "post_017",
            branchId: "feed",
            author: "Dante_Sogliano",
            date: "06.05.2026 19:58",
            text: { en: "" }, 
            mediaUrl: "media/feed/curse/Screenshot_20260507_141519_Video Player.jpg", 
            mediaType: "image"
        },
        {
            id: "post_016",
            branchId: "feed",
            author: "Dante_Sogliano",
            date: "06.05.2026 19:57",
            text: { en: "" }, 
            mediaUrl: "media/feed/curse/Screenshot_20260507_141412_Video Player.jpg", 
            mediaType: "image"
        },
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
 
