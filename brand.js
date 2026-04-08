// brand.js
document.addEventListener('DOMContentLoaded', () => {
    // 1. ОГРОМНЫЙ ОБЪЕКТ С ДАННЫМИ (вставляем прямо сюда, чтобы точно видел)
    const allProducts = {
         'Apple': [
        { name: "iPhone 15 Pro", price: 55990, img: "https://ap-store.ru/files/products/3dl11trt7t4352ds1by6jkum93bduf66.250x300.jpeg?5769e4a42a36f411b25c2161063f144f" },
        { name: "MacBook Air 13 M2", price: 125000, img: "https://ipac31.ru/image/cache/data/product/mac/Macbook%20Air%20M2/macbook-air-m2-space-gray-2-400x400.png" },
        { name: "iPad Pro 11", price: 95000, img: "https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111968_ipad-pro-11-2020.jpeg" },
        { name: "Apple Watch Series 9", price: 45000, img: "https://cdsassets.apple.com/content/services/pub/image?productid=PL207&size=240x240" },
        { name: "AirPods Pro 2", price: 24000, img: "https://images.biggeek.ru/1/870/a242/22739-99718518-503Airpodspro2@2x.png" },
        { name: "Apple TV 4K", price: 19000, img: "https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111922_sp845-apple-tv-4k-2gen.png" },
        { name: "MagSafe Charger", price: 5000, img: "https://images.biggeek.ru/1/870/eb29/34974-74428576-6059938@2x.jpeg" },
        { name: "AirTag (4 pack)", price: 12000, img: "https://img.mvideo.ru/Big/10031701bb.jpg?width=600&fmt=avif" },
        { name: "Mac mini M2", price: 70000, img: "https://cdsassets.apple.com/content/services/pub/image?productid=300923&size=240x240" },
        { name: "Beats Studio Pro", price: 35000, img: "https://applegod.ru/upload/webp/70/upload/resize-cache/iblock/d61/600-591-0/ohx5xa4y5319113re1ew9hjh6lr47ac8.webp" }
    ],
    'Samsung': [
        { name: "Galaxy S24 Ultra", price: 115000, img: "https://c.dns-shop.ru/thumb/st4/fit/500/500/667c1833e5570d0129d54493177e30d4/7bb18f6f859063ef21e86697f97589ab7bc609973e205108183e29b0bb173c8b.jpg.webp" },
        { name: "Galaxy Z Fold 5", price: 145000, img: "https://c.dns-shop.ru/thumb/st4/fit/300/300/97e1871f253db3493ce6e43e4c61c6e3/f9efd15f07eee49ce07b244959224547550adc251fa1da6c0f49f4575bca4cc8.jpg.webp" },
        { name: "Galaxy Tab S9", price: 80000, img: "https://c.dns-shop.ru/thumb/st1/fit/500/500/48ec4c15a3dab95a70d97bfdfdd11681/d376007ce594d1347392e9046a774760854e7aaa7335b79f33f5f9c691732359.jpg.webp" },
        { name: "Galaxy Watch 6 Classic", price: 35000, img: "https://c.dns-shop.ru/thumb/st1/fit/500/500/42db09e9e6b0b6d72e89ac6412321e8c/5a707a3d118ae3d0930691d6e052574d429f5f85932a233cbd564c744d3320d8.jpg.webp" },
        { name: "Galaxy Buds2 Pro", price: 16000, img: "https://c.dns-shop.ru/thumb/st4/fit/500/500/9c643728619d17df359aef323dea8024/ebe0f042a9d882b01e333cd0581fc57c90ba6dd2a540b1a0f8640ef8d47b9c76.jpg.webp" },
        { name: "Smart Monitor M8", price: 55000, img: "https://c.dns-shop.ru/thumb/st1/fit/500/500/991a0cbf35a310446f9e30e86232b73f/9aa1f0627dc91a57b74481909e166cd26977ac4b1afcda940dd06dcd6fb69a38.jpg.webp" },
        { name: "Portable SSD T7 2TB", price: 20000, img: "https://c.dns-shop.ru/thumb/st4/fit/500/500/4bb77b4a8b9ea60e1521d6307cd9a2af/16d03c9d5708fd7518952816c9ad8b38a308133cda6cc973cd471a4edc93fad9.jpg.webp" },
        { name: "Galaxy SmartTag2", price: 3500, img: "https://c.dns-shop.ru/thumb/st1/fit/500/500/b7c19fa98b0f45038c2a95077d093563/2c9f3e272b0bac1a43ff42f9edc75da464032d54f3af2680782955cef2ce6a12.jpg.webp" },
        { name: "Soundbar Q-Series", price: 45000, img: "https://c.dns-shop.ru/thumb/st1/fit/500/500/9104e6fd83137688d023376cba918b26/7cb8b38b5f8663c0f1deecb73b64a0c6a4fa976251137990f60b9f0528a42490.jpg.webp" },
        { name: "Galaxy A54 5G", price: 32000, img: "https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/c155531a2ee21d03c6697838eb0ecc0a/ba204b68392b41c1df1977e891fd0fa22479161221d6c2e53dda87c5009c7d4c.jpg.webp" }
    ],
        'Xiaomi': [
        { name: "Xiaomi 14 Ultra", price: 100000, img: "https://c.dns-shop.ru/thumb/st1/fit/500/500/a47bb40cf2837bdd92f03f137979b2c9/4fea4bc87792b8698618a948b7ac0ba847a895bec6d7294e720e291b879a75c9.jpg.webp" },
        { name: "Redmi Note 13 Pro", price: 35000, img: "https://c.dns-shop.ru/thumb/st1/fit/wm/0/0/5dbcc23547d63261ceec2a50ed8a33e0/2ef391d3cd8205f1ce1b427d3e9ea707420684f96b098bf70553566b9741e367.jpg.webp" },
        { name: "Xiaomi Pad 6", price: 40000, img: "https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/47627633fc8c1a9cdde2843ea0bca73a/88859b44096c3554b33635aab2d0d3f3066ca8ddebd8390c7f60edebf8a02949.jpg.webp" },
        { name: "Mi Band 8", price: 4000, img: "https://c.dns-shop.ru/thumb/st1/fit/500/500/8d1fb8d25820107a95a74a3444eadaa7/316ddaf8d4ee2c65be89db0d7b27cf9a9451dc7b06dda0b63dcc7ec30a5bb8ad.jpg.webp" },
        { name: "Robot Vacuum S10", price: 25000, img: "https://c.dns-shop.ru/thumb/st1/fit/500/500/9157206e30cfdc4634ee5ad608f6da45/089c879eba30f74d61c763fe3ecb54bf0996992ee194d51fe1db462dd56d3e2f.jpg.webp" },
        { name: "Smart Air Purifier 4", price: 18000, img: "https://c.dns-shop.ru/thumb/st1/fit/500/500/28bd86f4bdef4b68c9b49b520ff716c1/5068049e9bce02b65c6cee60900c1021684260f6ef15f686af43775f1cdfdc48.jpg.webp" },
        { name: "Mi Electric Scooter 4", price: 45000, img: "https://c.dns-shop.ru/thumb/st4/fit/500/500/c2c7c993737e2c171a054aecdbc36365/03feaa6f41dfe625fea527bc6db6fe6a434a7a126adbc54e96e0069b81e87cb5.jpg.webp" },
        { name: "Xiaomi Watch S3", price: 15000, img: "https://c.dns-shop.ru/thumb/st1/fit/500/500/d9d6e15c178d02222a10ea7fc3120f00/6c195a1e30832d13f17c41f39edd936c40620d7221d2fe51f9116b83f26f9ddb.jpg.webp" },
        { name: "Smart Kettle Pro", price: 5000, img: "https://c.dns-shop.ru/thumb/st1/fit/500/500/54d9368b86192c1164b50adf76997d96/9998bfce9f6200df18a89f840d6dcbbb48f8f83ffc2c248935fd4a9c97cac456.jpg.webp" },
        { name: "Redmi Buds 5 Pro", price: 8000, img: "https://c.dns-shop.ru/thumb/st4/fit/500/500/40ecb5cbc2d2932d888ab44df3138f05/4fbb21ed20a2a737734a2449f59f08ccf438311488f4dd5c0ca4f0e4f9ac6351.jpg.webp" }
    ],
    'Bosch': [
        { name: "Кофемашина Verocup", price: 55000, img: "https://c.dns-shop.ru/thumb/st4/fit/500/500/6bcaaad93ca04660531c05b86f99bad8/fc77ace5652bb78bf00be819778aac268535cdc87ffe2b85965b63e823e10430.png.webp" },
        { name: "Посудомоечная машина", price: 48000, img: "https://c.dns-shop.ru/thumb/st1/fit/wm/0/0/080172280d78f584eeff9b6094a90b11/045073f992c76bf7d6fc722454ea6cca43e50a64fab1b962b9dca99904af88ee.jpg.webp" },
        { name: "Пылесос Unlimited 7", price: 32000, img: "https://c.dns-shop.ru/thumb/st4/fit/500/500/b7fe870c733993a0bb6b1fff7ed26ec3/3c12550b5a1aa6fccce7dbb547ce07a474b685fd8836f4c4c5d4ea0dde422e10.jpg.webp" },
        { name: "Кухонный комбайн MUM", price: 22000, img: "https://c.dns-shop.ru/thumb/st1/fit/500/500/cc8575d4dbbe67a7eb848f947fd3c1ac/8157327c045777cc64b34f6ee32b51ec3cf042f97661e0cc4fe0c042524fefa9.jpg.webp" },
        { name: "Шуруповерт IXO 7", price: 6000, img: "https://c.dns-shop.ru/thumb/st1/fit/500/500/e02e164d6a5bd1538c28110408774a89/95060e87e12656f16d3cf59cee3a3f0750c97fdebc8a216ef5bdabecaa61f6b1.jpg.webp" },
        { name: "Электрочайник Styline", price: 9000, img: "https://ir.ozone.ru/s3/multimedia-n/wc1000/6885672647.jpg" },
        { name: "Погружной блендер", price: 7500, img: "https://c.dns-shop.ru/thumb/st4/fit/500/500/c3a78c9dd57ac6b349c000bb37d3c135/aacf296f0b246ba544604154b70538fb60b916a7b5f24c218225a1bbc86e6ee4.jpg.webp" },
        { name: "Утюг Sensixx'x", price: 8500, img: "https://static.eldorado.ru/photos/71/710/915/04/new_71091504_l_1459429746.jpeg/resize/360x360/" },
        { name: "Стиральная машина i-DOS", price: 65000, img: "https://avatars.mds.yandex.net/get-mpic/17751811/2a0000019bfca4b44d78266855a0f47ae907/optimize" },
        { name: "Тостер DesignLine", price: 5500, img: "https://c.dns-shop.ru/thumb/st1/fit/wm/0/0/d4fa01612fea90e7055d5696d1ee20cc/ac2c882c359e5ae84b5a5432bd09c35f8f4d8010a3849e6cbc45df9cddd99353.jpg.webp" }
    ],
    'Philips': [
        { name: "Телевизор OLED Ambilight", price: 130000, img: "https://avatars.mds.yandex.net/get-mpic/11558729/2a0000019b0c98a35afe5685c801c958a83b/optimize" },
        { name: "Бритва Series 9000", price: 24000, img: "https://ir.ozone.ru/s3/multimedia-1-h/wc1000/8120641409.jpg" },
        { name: "Зубная щетка Sonicare", price: 15000, img: "https://ir.ozone.ru/s3/multimedia-1-w/wc1000/7595882492.jpg" },
        { name: "Фотоэпилятор Lumea", price: 40000, img: "https://c.dns-shop.ru/thumb/st1/fit/500/500/ab70eef941985604bb3a4cbbf8591e2d/0143d38cffa4ebda27fde7b8b3d78a4ffbd2726061b9a404073c3c6bd6ad5ad1.jpg.webp" },
        { name: "Кофемашина LatteGo", price: 60000, img: "https://c.dns-shop.ru/thumb/st1/fit/500/500/ba0388583e73be34787ad6ce320d45af/4ff22403d00af30905e934ca426ee83fa4d3e7d75b56642a2d96c8a3ebb470f5.jpg.webp" },
        { name: "Утюг с парогенератором", price: 28000, img: "https://ir.ozone.ru/s3/multimedia-1-4/wc1000/7329244684.jpg" },
        { name: "Увлажнитель воздуха", price: 12000, img: "https://ir.ozone.ru/s3/multimedia-1-n/wc1000/7176047387.jpg" },
        { name: "Мультиварка Viva", price: 9500, img: "https://images.philips.com/is/image/philipsconsumer/vrs_b8198418804bcd33b25cdb9e43b8b10d279e9dc6?wid=700&hei=700&$pnglarge$" },
        { name: "Наушники Fidelio", price: 30000, img: "https://ir.ozone.ru/s3/multimedia-1-g/wc1000/7767943000.jpg" },
        { name: "Триммер OneBlade", price: 4500, img: "https://c.dns-shop.ru/thumb/st4/fit/500/500/8d1862e78f5599712172c2d3a4fedf1f/9b0cb44b172694bc83e5a223a7d968a799c6898bac0b69442ff4829e1cb6750e.png.webp" }
    ],
    'LG': [
        { name: "Монитор UltraGear", price: 45000, img: "https://c.dns-shop.ru/thumb/st1/fit/wm/0/0/3d1dba44b840a956c9d64c26ded4866b/d45a420ba0cb6fc60cc9de6c7d6f311de1e5d2afce3838615c5a43fae365dbf3.jpg.webp" },
        { name: "Телевизор OLED C3", price: 140000, img: "https://c.dns-shop.ru/thumb/st1/fit/500/500/f577d60e941cabd4082186afa4626087/0f1969683c96eb001cffe5d7b413326a3c398e33ec827f2bec1f1022cef34e80.jpg.webp" },
        { name: "Холодильник InstaView", price: 180000, img: "https://www.lg.com/ru/images/refrigerators/md07600294/gallery/D-01.jpg" },
        { name: "Микроволновка NeoChef", price: 15000, img: "https://www.lg.com/ru/images/microwaves/md05772592/gallery/medium_01.jpg" },
        { name: "Стиральная машина AI DD", price: 55000, img: "https://www.lg.com/ru/images/washing-machines/md07510055/gallery/medium01.jpg" },
        { name: "Аудиосистема XBOOM", price: 25000, img: "https://c.dns-shop.ru/thumb/st1/fit/500/500/c30b7eff1bc0b8ed363657bc86e7758f/2be36e2ad1e347421bc76563bf4c1122ce87124bdd0bf9db1ccb6ea7d8e3cc4c.jpg.webp" },
        { name: "Проектор CineBeam", price: 90000, img: "https://c.dns-shop.ru/thumb/st1/fit/500/500/891edc34fd00c20647a5983470b60e3e/cd52b4595bb5acf391d2122f5867a301ae87d7919aecf8130f37d77e31c17967.jpg.webp" },
        { name: "Очиститель воздуха PuriCare", price: 40000, img: "https://ir.ozone.ru/s3/multimedia-1-q/wc1000/6921625994.jpg" },
        { name: "Пылесос CordZero", price: 38000, img: "https://ir.ozone.ru/s3/multimedia-1-y/wc1000/8611323118.jpg" },
        { name: "Кондиционер Artcool", price: 60000, img: "https://ir.ozone.ru/s3/multimedia-r/wc1000/6366747471.jpg" }
    ],
    'Asus': [
        { name: "ROG Zephyrus G14", price: 160000, img: "https://c.dns-shop.ru/thumb/st1/fit/500/500/87228151ed07e14f9ac9550059e6411c/c4a646bc838b729f0463cf05e504e9ec1651da7442a4da8012eff10f0b892b54.jpg.webp" },
        { name: "Zenbook 14 OLED", price: 110000, img: "https://dlcdnwebimgs.asus.com/gain/caf912a5-5bc2-4a81-ac8f-6339e488f549/w800/fwebp" },
        { name: "Видеокарта RTX 4080", price: 130000, img: "https://c.dns-shop.ru/thumb/st1/fit/500/500/3139443e502887411b3e9beabd6843f2/e67fead6e29baafb1d0d6e8a224f8641834ade0368092a07aa2a89cf86edfcca.jpg.webp" },
        { name: "Материнская плата ROG", price: 40000, img: "https://c.dns-shop.ru/thumb/st4/fit/500/500/b910eedf1eeccdc4b1a6adb90b1e287c/65433c48925e1c600433dd10666fc14ab718f10f89b20913f154df7f5fa57b03.jpg.webp" },
        { name: "Монитор ProArt", price: 75000, img: "https://c.dns-shop.ru/thumb/st1/fit/wm/0/0/5ee822543ff5aa69bcee563485c760f9/f4ba0b0b808a0b197c9a0460811aca3536c1cfdc554becea472e2bb80b65eae9.jpg.webp" },
        { name: "Роутер RT-AX88U", price: 25000, img: "https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/22db674502748f5518a224331b28e01b/20be27a98e0ae0f1df1776c94ee837bd52d48776a1db715dcc018347ec96841a.jpg.webp" },
        { name: "Мышь ROG Spatha", price: 12000, img: "https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/b250635142ce1597925922f61a3ae569/c94d3121eb0088dc1f45ea709d33894f31bf3e877653326b355e2301a475b052.jpg.webp" },
        { name: "Клавиатура ROG Azoth", price: 22000, img: "https://c.dns-shop.ru/thumb/st4/fit/500/500/abef80ce999103f4afd9b762ea9436ff/3f710a5523c50e6648d4bb622758a4f514d859df33af929dc380de3a80ef7c2e.jpg.webp" },
        { name: "Смартфон Zenfone 10", price: 75000, img: "https://ir.ozone.ru/s3/multimedia-p/wc1000/6847349893.jpg" },
        { name: "Гарнитура ROG Delta", price: 18000, img: "https://avatars.mds.yandex.net/get-mpic/14110297/2a00000198cada76855e314ee5de0a0c2426/optimize" }
    ],
    'Honor': [
        { name: "Honor Magic6 Pro", price: 95000, img: "https://c.dns-shop.ru/thumb/st1/fit/wm/0/0/b5baf62309c55718b11711fe8a133c66/126847b52cf12dd228f2d610ece822f558c891c3d1a5df52bfe27a510814f3e2.jpg.webp" },
        { name: "Honor 90", price: 45000, img: "https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/099c89b31e760a780fb39e394960b15c/edf318b51b94e1cc5c242cc30117c19398c133a7ae35fb2b8a8efb9be803b6ca.jpg.webp" },
        { name: "Honor Pad 9", price: 30000, img: "https://c.dns-shop.ru/thumb/st1/fit/500/500/62782a653407c4a80a76274fc5a25604/58dce8d2cb89bcd639c9f881655174725fc672a6c8aa9dbb1ac0529b025fe54f.jpg.webp" },
        { name: "MagicBook 16", price: 85000, img: "https://avatars.mds.yandex.net/get-mpic/16439402/2a0000019d4dfbd5502c09e07bc55cada5b5/optimize" },
        { name: "Honor Watch 4", price: 12000, img: "https://ir.ozone.ru/s3/multimedia-1-i/wc1000/9284908806.jpg" },
        { name: "Honor Choice Earbuds", price: 4000, img: "https://c.dns-shop.ru/thumb/st1/fit/500/500/6a4f81830f129392e5a1c0afa2869ff0/0f5a415c0a658cf3db4d0e53fc6d602a48d4b3d390c99ffc61348983d418f28e.png.webp" },
        { name: "Honor X9b", price: 28000, img: "https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/66890ad8a5585e6d36c185b4388b87b6/cc2aff77f8b725bc529e87220b7aeb5f531dee389ad9616df2a2b113155847be.jpg.webp" },
        { name: "Router 3", price: 5000, img: "https://c.dns-shop.ru/thumb/st1/fit/500/500/e3b080957738c22d131360bbad10ae08/53add12d646c9bf48d7e7a05dc0884fe988f2e7539590c48585a6edf69cef381.jpg.webp" },
        { name: " HONOR Pad X9", price: 22000, img: "https://c.dns-shop.ru/thumb/st4/fit/500/500/cc4434a611af5e95c3199140bb7851c2/2a5f9e2409e787aeec5ef2e388d7331359e6383b669f43ecca53ec89b75e1020.jpg.webp" },
        { name: "Honor Band 7", price: 3500, img: "https://ir.ozone.ru/s3/multimedia-1-8/wc1000/7714059776.jpg" }
    ],
    'Haier': [
        { name: "Холодильник 3D", price: 90000, img: "https://avatars.mds.yandex.net/get-mpic/14917431/2a000001992de4a303fd6d8da4914009b368/optimize" },
        { name: "Телевизор S3", price: 50000, img: "https://c.dns-shop.ru/thumb/st1/fit/500/500/a806e6a45b8272048b3316f05c4e9760/fd87edd73923091d36053be460606741cdb2d654b9aa6f793833fbfb9040b61f.jpg.webp" },
        { name: "Стиральная машина 601", price: 45000, img: "https://ir.ozone.ru/s3/multimedia-1-q/wc1000/9026388422.jpg" },
        { name: "Винный шкаф", price: 35000, img: "https://ir.ozone.ru/s3/multimedia-1-8/wc1000/8852441408.jpg" },
        { name: "Духовой шкаф", price: 42000, img: "https://c.dns-shop.ru/thumb/st1/fit/500/500/188abf437579614775247d75148bfd4a/2bdde230450059c2ef1bb007244ad3a2ed8b6f97327dcabf1d2a0c48876b5495.jpg.webp" },
        { name: "Варочная панель", price: 28000, img: "https://ir.ozone.ru/s3/multimedia-1-c/wc1000/7819077756.jpg" },
        { name: "Водонагреватель", price: 18000, img: "https://c.dns-shop.ru/thumb/st1/fit/500/500/393cd0e3186c70845a1bdd56e4a43265/0aa6f7deb5f47f6007fe47448c29fa125d068ef82be2807d96d0ff397cc920a6.jpg.webp" },
        { name: "Кондиционер Jade", price: 75000, img: "https://h-russia.com/thumb/2/QCU7j1aGQ1-Q8J5K6K2REQ/800r800/d/jade_super_match.jpg" },
        { name: "Морозильный ларь", price: 22000, img: "https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/9342b92594393cdd7b663138aaa11c81/3a0a0a618d086b7eb7b0648c3f9bc2835595a55dbc83ae9d51add7e178ce16c3.jpg.webp" },
        { name: "Посудомойка", price: 38000, img: "https://ir.ozone.ru/s3/multimedia-1-f/wc1000/9036176919.jpg" }
    ],
    'Smeg': [
        { name: "Чайник 50's Style", price: 18000, img: "https://sm-rus.ru/upload/resize_cache/iblock/2d7/kmvnefdnyhbvwzx2f2n70fc24d6e0v5x/238_256_1/chaynik_smeg_KLF03CREU_foto_open_3.webp" },
        { name: "Тостер на 2 слота", price: 19000, img: "https://smeg-store.ru/wa-data/public/shop/products/01/11/11101/images/128940/128940.350x0.jpg" },
        { name: "Холодильник FAB28", price: 250000, img: "https://smeg-store.ru/wa-data/public/shop/products/30/16/31630/images/131373/131373.350x0.jpg" },
        { name: "Кофемашина эспрессо", price: 45000, img: "https://smeg-store.ru/wa-data/public/shop/products/38/24/22438/images/81454/81454.350x0.jpg" },
        { name: "Блендер кремовый", price: 22000, img: "https://smeg-store.ru/wa-data/public/shop/products/78/81/28178/images/104209/104209.970.jpg" },
        { name: "Планетарный миксер", price: 55000, img: "https://smeg-store.ru/wa-data/public/shop/products/95/84/18495/images/81871/81871.200.jpg" },
        { name: "Соковыжималка для цитрус.", price: 17000, img: "https://smeg-store.ru/wa-data/public/shop/products/12/85/28512/images/106868/106868.200.jpg" },
        { name: "Вспениватель молока", price: 18000, img: "https://smeg-store.ru/wa-data/public/shop/products/23/80/28023/images/103368/103368.200.jpg" },
        { name: "Духовой шкаф Victoria", price: 120000, img: "https://smeg-store.ru/wa-data/public/shop/products/43/33/23343/images/81143/81143.200.jpg" },
        { name: "Кофемолка", price: 25000, img: "https://smeg-store.ru/wa-data/public/shop/products/17/21/32117/images/135555/135555.200.jpg" }
    ],
    'Redmond': [
        { name: "Мультиварка SkyCooker", price: 12000, img: "https://ir.ozone.ru/s3/multimedia-g/wc1000/6814861684.jpg" },
        { name: "Гриль SteakMaster", price: 15000, img: "https://c.dns-shop.ru/thumb/st1/fit/500/500/5122e6bdc4e1200945f0fed121b8c58c/e68073baeb91c0be2809fb00804fd05ffaa63452dc345837b4d8ff9dc52bf9a1.jpg.webp" },
        { name: "Умный чайник G200S", price: 5000, img: "https://ir.ozone.ru/s3/multimedia-1-z/wc1000/9673208999.jpg" },
        { name: "Пылесос-трость", price: 18000, img: "https://ir.ozone.ru/s3/multimedia-1-u/wc1000/6973232106.jpg" },
        { name: "Кофеварка рожковая", price: 14000, img: "https://c.dns-shop.ru/thumb/st4/fit/320/250/5bb1d6116fa6b659ad81b53c5d313cd3/15cbe3834d707b78b1569320be749d1475450306617b7859635108b2875e52a8.jpg" },
        { name: "Хлебопечка", price: 11000, img: "https://c.dns-shop.ru/thumb/st1/fit/500/500/9fdc760086c1f1494ffc19ea1e8d00f8/9657e9581911e1f0fae4adfba94c29b9cb0cecfcf558ccb0ff582f376b698957.jpg.webp" },
        { name: "Кухонные весы", price: 2000, img: "https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/97c9cc37e4b5d154cc4f827d38d11d3f/1b73cf5801657fabe911afae5d08a0e62c1d647ff2a223b518b4e5f29c381084.jpg.webp" },
        { name: "Утюг SkyIron", price: 6500, img: "https://c.dns-shop.ru/thumb/st4/fit/500/500/c496e19a0709b459bd2136904b72736c/33835d6eadcb19d9f83fc3d477ae7858e7687a9f0901917430bc693f12b536b1.jpg.webp" },
        { name: "Мясорубка", price: 9000, img: "https://c.dns-shop.ru/thumb/st1/fit/500/500/17280efb6f8ca875ca9d82871237c1ec/d019ec67f9aff37690e4d6227e451784374b6a07e911a1d8f15861f4758cfe45.jpg.webp" },
        { name: "Мультипекарь 6-в-1", price: 7000, img: "https://c.dns-shop.ru/thumb/st4/fit/500/500/139150a83cd192b7ce6353fa699420f6/51dda65f936e95beb9df430d684ce8057154d45333cf54b03902247c59bb3daf.jpg.webp" }
    ],
    'Cactus': [
        { name: "Картридж CS-C725", price: 800, img: "https://c.dns-shop.ru/thumb/st4/fit/500/500/e1abd645980d8eb8a748166f99c13d2f/40e5ab61aaeddb833c862a8de9de53c70da35bd274c64184c9424714c444deef.jpg.webp" },
        { name: "Бумага фотоглянец", price: 500, img: "https://c.dns-shop.ru/thumb/st1/fit/500/500/e0cd999eacd40ec87fd9be60b0dd3d40/5fd1af255a41d9017aaca5bb98dcd14456df4576c59e0930402bb049f2ae4fc3.jpg.webp" },
        { name: "Экран для проектора", price: 12000, img: "https://cactusshop.ru/wa-data/public/shop/products/72/21/2172/images/3029/3029.745.jpg" },
        { name: "3D-ручка", price: 3000, img: "https://cactusshop.ru/wa-data/public/shop/products/74/21/2174/images/3035/3035.745.jpg" },
        { name: "Пластик для 3D-печати", price: 1500, img: "http://static.cactus-russia.ru/data/news/2017/12890/01.jpg" },
        { name: "Чистящий набор для ТВ", price: 600, img: "https://static.cactus-russia.ru/catalog-photos/111/1118420/1118420_v01_b.jpeg" },
        { name: "Коврик для мыши", price: 1200, img: "https://static.cactus-russia.ru/catalog-photos/207/2075296/2075296_v01_b.jpeg" },
        { name: "Кронштейн для монитора", price: 4500, img: "https://static.cactus-russia.ru/catalog-photos/441/441661/441661_v01_b.jpeg" },
        { name: "Подставка для ноутбука", price: 2500, img: "https://static.cactus-russia.ru/catalog-photos/199/1995591/1995591_v01_b.jpeg" },
        { name: "Универсальный стилус", price: 1800, img: "https://ir.ozone.ru/s3/multimedia-1-0/wc1000/8269218720.jpg" }
    ]
        // Добавь сюда остальные бренды из моего прошлого сообщения, если заработает!
    };

    // 2. Получаем имя из ссылки
    const params = new URLSearchParams(window.location.search);
    const brandName = params.get('name'); 
    
    const titleEl = document.getElementById('brand-title');
    const gridEl = document.getElementById('brand-products');

    // ПРОВЕРКА: Если бренд найден в базе
    if (brandName && allProducts[brandName]) {
        titleEl.textContent = `Товары бренда ${brandName}`;
        const products = allProducts[brandName];

        gridEl.innerHTML = ""; // Очищаем сетку перед вставкой

        products.forEach(p => {
    const card = document.createElement('div');
    card.className = 'phone-card';
    
    // Теперь код ищет реальный файл в твоей папке img/products/
    const imagePath = p.img; 

    // Внутри твоего цикла products.forEach
// Внутри цикла products.forEach в файле brand.js
// В файле brand.js
card.innerHTML = `
    <div class="product-image-box">
         <img src="${p.img}" alt="${p.name}">
    </div>
    <h3>${p.name}</h3>
    <div class="price-value">${p.price} ₽</div>
    
<a href="ordersm.html?name=${encodeURIComponent(p.name)}&price=${p.price}&img=${encodeURIComponent(p.img)}" class="buy-button">
    Купить
</a>
`;
    gridEl.appendChild(card);
});
    } else {
        // Если что-то пошло не так, выведем ошибку на экран
        titleEl.textContent = "Ошибка: Бренд не найден в базе данных";
        console.error("Бренд из ссылки:", brandName);
        console.log("Доступные ключи в базе:", Object.keys(allProducts));
    }
});