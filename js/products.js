// =================================================================
// BANCO DE DADOS DE PRODUTOS E IMAGENS - EXATO ENIGMA
// =================================================================

const products = [
    {
        "id": 1,
        "name": "Lattafa Yara Candy Eau de Parfum",
        "subtitle": "Miniatura 30ml",
        "category": "perfumes",
        "badge": "Árabe",
        "price": 79.9,
        "image": "https://epocacosmeticos.vteximg.com.br/arquivos/ids/1065370/17581344811545.jpg?v=638939092407570000"
    },
    {
        "id": 2,
        "name": "Lattafa Fakhar Eau de Parfum",
        "subtitle": "Fakhar Rose 100ml",
        "category": "perfumes",
        "badge": "Mais Vendido",
        "price": 279.9,
        "image": "https://epocacosmeticos.vteximg.com.br/arquivos/ids/2646704/17582505965066.jpg?v=639190373067270000"
    },
    {
        "id": 3,
        "name": "Sahari Collections Malik Al Sharq",
        "subtitle": "Eau de Parfum 100ml",
        "category": "perfumes",
        "badge": "Árabe Premium",
        "price": 159.9,
        "image": "https://assets.kenzz.com/processed/35c7a96219bba97fb726c7b4b4c8d63a8505a3f518830e530b48ac0bf3968807_1200.webp"
    },
    {
        "id": 4,
        "name": "Carolina Herrera 212 VIP Men",
        "subtitle": "Eau de Toilette 100ml",
        "category": "perfumes",
        "badge": "Importado Orig.",
        "price": 499.9,
        "image": "https://epocacosmeticos.vteximg.com.br/arquivos/ids/485803-800-800/212-vip-men-carolina-hererra-100ml--3-.jpg?v=639192909607800000"
    },
    {
        "id": 5,
        "name": "Al-A'raaf Asfar Eau de Parfum",
        "subtitle": "Frasco 100ml",
        "category": "perfumes",
        "badge": "Exclusivo",
        "price": 159.9,
        "image": "https://www.lgimportados.com/produtos_img/9/0/0/1/5/7/IMG_900157_3.JPG"
    },
    {
        "id": 6,
        "name": "New Brand Master Of Essence",
        "subtitle": "Pink Gold EDP 100ml",
        "category": "perfumes",
        "badge": "Feminino",
        "price": 129.9,
        "image": "https://parfumneked.hu/parfumneked/wp-content/uploads/2019/12/MASTER-pink-gold.jpg"
    },
    {
        "id": 7,
        "name": "Pendora Scents Cool Girl",
        "subtitle": "Eau de Parfum 100ml",
        "category": "perfumes",
        "badge": "Tendência",
        "price": 179,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU8Sd9CUk2uefhod_9qwmHfy2DFmL0t1WqHrMl95cPZjHVZxwELfeVwDnV&s=10"
    },
    {
        "id": 8,
        "name": "Diesel Fuel For Life Homme",
        "subtitle": "Eau de Toilette",
        "category": "perfumes",
        "badge": "Masculino",
        "price": 359.9,
        "image": "https://cz.diesel.com/dw/image/v2/BBLG_PRD/on/demandware.static/-/Sites-diesel-master-catalog/default/dwcc19b0e9/images/large/PL0633_00PRO_01_E.jpg?q=80"
    },
    {
        "id": 9,
        "name": "Lattafa Perfumes Asad Zanzibar",
        "subtitle": "Eau de Parfum 100ml",
        "category": "perfumes",
        "badge": "Lançamento",
        "price": 199.9,
        "image": "https://www.drogasil.com.br/_next/image?url=https%3A%2F%2Fproduct-data.raiadrogasil.io%2Fimages%2F17031470.webp&w=3840&q=40"
    },
    {
        "id": 10,
        "name": "Sahari Collections Blue Sultan",
        "subtitle": "Eau de Parfum 100ml",
        "category": "perfumes",
        "badge": "Árabe",
        "price": 159.9,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkdMqK5LJeHbcGkuiWTFG_NmiDeql_AB8xavff-NnqTQ&s=10"
    },
    {
        "id": 11,
        "name": "Dream Brand Body Splash Pure Seduction",
        "subtitle": "Frasco Spray 250ml",
        "category": "sprays",
        "badge": "Body Splash",
        "price": 79.9,
        "image": "https://assets.sistemawbuy.com.br/arquivos/2991e0dc262d35f367db71db5650f367/produtos/69b5588751194/15493845138-body-splash-dream-brand-collection-pure-seduction-feminino-250ml-3-69b558901881e.jpg"
    },
    {
        "id": 12,
        "name": "Lattafa Ana Abiyedh Rouge",
        "subtitle": "All Over Spray 150ml",
        "category": "sprays",
        "badge": "Body Spray",
        "price": 89.9,
        "image": "https://images.tcdn.com.br/img/img_prod/1351546/perfume_lattafa_ana_abiyedh_rouge_all_over_spray_1_1_20260414182749_f6b3ea638402.png"
    },
    {
        "id": 13,
        "name": "Beauty Brand Loção Hidratante",
        "subtitle": "Pure Seduction 236ml",
        "category": "cremes",
        "badge": "Creme Corporal",
        "price": 79.9,
        "image": "https://acdn-us.mitiendanube.com/stores/004/134/460/products/copia-de-produtos-site-jc-imports-0bcf9d3503c25b1c6317707343339354-1024-1024.webp"
    },
    {
        "id": 14,
        "name": "Dream Brand Creme Perfumado",
        "subtitle": "Inspiração Angel 200ml",
        "category": "cremes",
        "badge": "Hidratante",
        "price": 99.9,
        "image": "https://down-br.img.susercontent.com/file/br-11134207-7r98o-lsj9nwp0wnqc17"
    },
    {
        "id": 15,
        "name": "Armaf Club de Nuit Woman",
        "subtitle": "Eau de Parfum 105ml",
        "category": "perfumes",
        "badge": "Feminino",
        "price": 279.9,
        "image": "https://images.tcdn.com.br/img/img_prod/1348428/perfume_feminino_club_de_nuit_woman_eau_de_parfum_853353_1_1a83bb615f8bad669a370d9269d471f6.jpg"
    },
    {
        "id": 16,
        "name": "Armaf Club de Nuit Intense Man",
        "subtitle": "Eau de Toilette 105ml",
        "category": "perfumes",
        "badge": "Masculino",
        "price": 279.9,
        "image": "https://images.tcdn.com.br/img/img_prod/1222831/club_de_nuit_intense_man_de_armaf_eau_de_toilette_753_1_6e290264ba5ce0345336ea2303ce0451.jpg"
    },
    {
        "id": 17,
        "name": "Orientica Azure Fantasy",
        "subtitle": "Frasco 80ml",
        "category": "perfumes",
        "badge": "Árabe Premium",
        "price": 799.9,
        "image": "https://epocacosmeticos.vteximg.com.br/arquivos/ids/1029615/17581340559327.jpg?v=638937308597370000"
    },
    {
        "id": 18,
        "name": "Lattafa Musamam White Intense",
        "subtitle": "Eau de Parfum 100ml",
        "category": "perfumes",
        "badge": "Árabe",
        "price": 399.9,
        "image": "https://t34114.vtexassets.com/arquivos/ids/303685/perfume-lattafa-musamam-white-intense-edp-100ml.jpg?v=639192808941100000"
    },
    {
        "id": 20,
        "name": "Story Off Black New Brand Men",
        "subtitle": "100 ml",
        "category": "perfumes",
        "badge": "Importado Orig.",
        "price": 119.9,
        "image": "https://m.media-amazon.com/images/I/61Sjd2C-gUL._AC_SL1000_.jpg"
    },
    {
        "id": 21,
        "name": "Silver King Masculino",
        "subtitle": "Eau de Parfum 100ml",
        "category": "perfumes",
        "badge": "Importado Orig.",
        "price": 159.9,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDqOMZhWe2Y0R6XC6st4I79zmtw-wJjKZ_rl65dAcCbQ&s"
    },
    {
        "id": 22,
        "name": "Yara Lattafa",
        "subtitle": "Eau de Perfum 100 ml",
        "category": "perfumes",
        "badge": "Mais Vendido",
        "price": 189.9,
        "image": "https://http2.mlstatic.com/D_NQ_NP_2X_960338-MLA111231794657_052026-F.webp"
    },
    {
        "id": 23,
        "name": "Yara Lattafa All",
        "subtitle": "Over Spray 150ml",
        "category": "sprays",
        "badge": "ÁRABE",
        "price": 99.9,
        "image": "https://zaoud.it/cdn/shop/files/Lattafa-yara-all-over-spray-bottle-against-white-background.jpg?v=1748026970&width=990"
    },
    {
        "id": 24,
        "name": "Yaran Miniatura",
        "subtitle": "Eau de Perfum 25ml",
        "category": "perfumes",
        "badge": "Árabe",
        "price": 59.9,
        "image": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRx5ldXY-jsk4t6QVWAaAVmN8NB0uvq0tCeZ9S51gMOvksorcMuaWrrKCqJVsxU34L5pab6O7mYvYwz7zh56xWC4LeRgGx8Ag"
    },
    {
        "id": 25,
        "name": "Sabah Al Ward",
        "subtitle": "Eau de Perfum100ml",
        "category": "perfumes",
        "badge": "Mais vendido",
        "price": 189.9,
        "image": "https://http2.mlstatic.com/D_NQ_NP_2X_797101-MLA108811455004_032026-F.webp"
    },
    {
        "id": 26,
        "name": "Sabah Al Wurud",
        "subtitle": "Arabian Brand 200ml",
        "category": "cremes",
        "badge": "Arabian Body Lottion",
        "price": 99.9,
        "image": "https://http2.mlstatic.com/D_NQ_NP_2X_797101-MLA108811455004_032026-F.webp"
    },
    {
        "id": 27,
        "name": "Sabah Al Wurud",
        "subtitle": "Miniatura 25ml",
        "category": "perfumes",
        "badge": "Árabe miniatura",
        "price": 79.9,
        "image": "https://cdn.atacadoconnect.com/produtos/1374872/perfume-beauty-brand-sabah-a-079-al-wurud-eau-de-parfum-feminino-25ml-1374872-n4ugp.webp"
    },
    {
        "id": 28,
        "name": "Lattafa Fakhar Eau de Parfum",
        "subtitle": "All Over Spray",
        "category": "perfumes",
        "badge": "Mais vendido",
        "price": 99.9,
        "image": "https://http2.mlstatic.com/D_NQ_NP_2X_636601-MLA113407917801_062026-F-spray-corpo-e-cabelo-fakhar-pride-of-lattafa-150ml.webp"
    },
    {
        "id": 29,
        "name": "Lattafa Fakhar",
        "subtitle": "Pride  Of Lattafa  200ML",
        "category": "sprays",
        "badge": "Desodorsnte Spray",
        "price": 200,
        "image": "https://dcdn-us.mitiendanube.com/stores/006/005/014/products/6-f8260587711deae38917579529542298-1024-1024.webp"
    },
    {
        "id": 30,
        "name": "Atheeri Lattafa",
        "subtitle": "Eau de Parfum 100ml",
        "category": "perfumes",
        "badge": "Exclusivo",
        "price": 459.9,
        "image": "https://http2.mlstatic.com/D_NQ_NP_2X_702031-MLA113714043249_062026-F.webp"
    },
    {
        "id": 31,
        "name": "Mussamam lattafa",
        "subtitle": "Eau de Parfum 100ml",
        "category": "perfumes",
        "badge": "Mais Vendido",
        "price": 359.9,
        "image": "https://down-br.img.susercontent.com/file/br-11134207-820mh-mofwd62mbmdi08@resize_w900_nl.webp"
    },
    {
        "id": 32,
        "name": "My Love Intense",
        "subtitle": "Eau de Parfum 100ml",
        "category": "perfumes",
        "badge": "Importado Orig.",
        "price": 119.9,
        "image": "https://http2.mlstatic.com/D_NQ_NP_2X_604282-MLA114529693767_072026-F.webp"
    },
    {
        "id": 33,
        "name": "Lacoste Essential",
        "subtitle": "Eau de Toilette 125ml",
        "category": "perfumes",
        "badge": "Importado Orig.",
        "price": 389.9,
        "image": "https://epocacosmeticos.vteximg.com.br/arquivos/ids/619680-450-450/essential--lacoste-perfume-masculino-eau-te-toilette--4-.jpg?v=638858741760400000"
    },
    {
        "id": 34,
        "name": "Hayaati Lattafa Masculino",
        "subtitle": "Eau de Parfum 100ml",
        "category": "perfumes",
        "badge": "Árabe",
        "price": 249.9,
        "image": "https://epocacosmeticos.vteximg.com.br/arquivos/ids/2384948-450-450/17810523151528.jpg?v=639167770290970000"
    },
    {
        "id": 35,
        "name": "Desodorante Hayaati Lattafa",
        "subtitle": "Desodorante Spray 200ml",
        "category": "perfumes",
        "badge": "Árabe",
        "price": 39.9,
        "image": "https://imageswscdn.wslojas.com.br/files/2940/MED_produto-desodorante-hayaati-lattafa-masculino-200ml-perfumes-arabes-lattafa-no-atacado-3829390352.webp"
    },
    {
        "id": 36,
        "name": "Asad Elixir de Lattafa",
        "subtitle": "Eau De Parfum 100 Ml",
        "category": "perfumes",
        "badge": "Árabe",
        "price": 279.9,
        "image": "https://epocacosmeticos.vteximg.com.br/arquivos/ids/1333447-800-800/17653114059844.jpg?v=639009661903100000"
    }
];
