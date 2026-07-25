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
        "price": 680,
        "image": "https://epocacosmeticos.vteximg.com.br/arquivos/ids/485803-800-800/212-vip-men-carolina-hererra-100ml--3-.jpg?v=639192909607800000"
    },
    {
        "id": 5,
        "name": "Al-A'raaf Asfar Eau de Parfum",
        "subtitle": "Frasco 100ml",
        "category": "perfumes",
        "badge": "Exclusivo",
        "price": 145,
        "image": "https://www.lgimportados.com/produtos_img/9/0/0/1/5/7/IMG_900157_3.JPG"
    },
    {
        "id": 6,
        "name": "New Brand Master Of Essence",
        "subtitle": "Pink Gold EDP 100ml",
        "category": "perfumes",
        "badge": "Feminino",
        "price": 160,
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
        "price": 460,
        "image": "https://cz.diesel.com/dw/image/v2/BBLG_PRD/on/demandware.static/-/Sites-diesel-master-catalog/default/dwcc19b0e9/images/large/PL0633_00PRO_01_E.jpg?q=80"
    },
    {
        "id": 9,
        "name": "Lattafa Perfumes Asad Zanzibar",
        "subtitle": "Eau de Parfum 100ml",
        "category": "perfumes",
        "badge": "Lançamento",
        "price": 224,
        "image": "https://www.drogasil.com.br/_next/image?url=https%3A%2F%2Fproduct-data.raiadrogasil.io%2Fimages%2F17031470.webp&w=3840&q=40"
    },
    {
        "id": 10,
        "name": "Sahari Collections Blue Sultan",
        "subtitle": "Eau de Parfum 100ml",
        "category": "perfumes",
        "badge": "Árabe",
        "price": 220,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkdMqK5LJeHbcGkuiWTFG_NmiDeql_AB8xavff-NnqTQ&s=10"
    },
    {
        "id": 11,
        "name": "Dream Brand Body Splash Pure Seduction",
        "subtitle": "Frasco Spray 250ml",
        "category": "sprays",
        "badge": "Body Splash",
        "price": 78,
        "image": "https://assets.sistemawbuy.com.br/arquivos/2991e0dc262d35f367db71db5650f367/produtos/69b5588751194/15493845138-body-splash-dream-brand-collection-pure-seduction-feminino-250ml-3-69b558901881e.jpg"
    },
    {
        "id": 12,
        "name": "Lattafa Ana Abiyedh Rouge",
        "subtitle": "All Over Spray 150ml",
        "category": "sprays",
        "badge": "Body Spray",
        "price": 153,
        "image": "https://images.tcdn.com.br/img/img_prod/1351546/perfume_lattafa_ana_abiyedh_rouge_all_over_spray_1_1_20260414182749_f6b3ea638402.png"
    },
    {
        "id": 13,
        "name": "Beauty Brand Loção Hidratante",
        "subtitle": "Pure Seduction 236ml",
        "category": "cremes",
        "badge": "Creme Corporal",
        "price": 175,
        "image": "https://acdn-us.mitiendanube.com/stores/004/134/460/products/copia-de-produtos-site-jc-imports-0bcf9d3503c25b1c6317707343339354-1024-1024.webp"
    },
    {
        "id": 14,
        "name": "Dream Brand Creme Perfumado",
        "subtitle": "Inspiração Angel 200ml",
        "category": "cremes",
        "badge": "Hidratante",
        "price": 82,
        "image": "https://down-br.img.susercontent.com/file/br-11134207-7r98o-lsj9nwp0wnqc17"
    },
    {
        "id": 15,
        "name": "Armaf Club de Nuit Woman",
        "subtitle": "Eau de Parfum 105ml",
        "category": "perfumes",
        "badge": "Feminino",
        "price": 450,
        "image": "https://images.tcdn.com.br/img/img_prod/1348428/perfume_feminino_club_de_nuit_woman_eau_de_parfum_853353_1_1a83bb615f8bad669a370d9269d471f6.jpg"
    },
    {
        "id": 16,
        "name": "Armaf Club de Nuit Intense Man",
        "subtitle": "Eau de Toilette 105ml",
        "category": "perfumes",
        "badge": "Masculino",
        "price": 450,
        "image": "https://images.tcdn.com.br/img/img_prod/1222831/club_de_nuit_intense_man_de_armaf_eau_de_toilette_753_1_6e290264ba5ce0345336ea2303ce0451.jpg"
    },
    {
        "id": 17,
        "name": "Orientica Azure Fantasy",
        "subtitle": "Frasco 80ml",
        "category": "perfumes",
        "badge": "Árabe Premium",
        "price": 450,
        "image": "https://epocacosmeticos.vteximg.com.br/arquivos/ids/1029615/17581340559327.jpg?v=638937308597370000"
    },
    {
        "id": 18,
        "name": "Lattafa Musamam White Intense",
        "subtitle": "Eau de Parfum 100ml",
        "category": "perfumes",
        "badge": "Árabe",
        "price": 450,
        "image": "https://t34114.vtexassets.com/arquivos/ids/303685/perfume-lattafa-musamam-white-intense-edp-100ml.jpg?v=639192808941100000"
    },
    {
        "id": 19,
        "name": "teste",
        "subtitle": "teste",
        "category": "perfumes",
        "badge": "Árabe",
        "price": 200,
        "image": "https://epocacosmeticos.vteximg.com.br/arquivos/ids/701285-800-800/3605533315224-3605533315163.05.jpg.jpg?v=638670158057000000"
    }
];
