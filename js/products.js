// =================================================================
// BANCO DE DADOS DE PRODUTOS E IMAGENS - LARI BIRUTA COSMÉTICOS
// =================================================================
// Para alterar a foto de um produto, basta mudar a propriedade "image".
// Você pode usar uma URL da internet ou o caminho de uma foto na pasta images/ (ex: "images/meu-perfume.jpg").

const products = [
    {
        id: 1,
        name: "Lattafa Yara Candy Eau de Parfum",
        subtitle: "Miniatura 30ml",
        category: "perfumes",
        badge: "Árabe",
        price: 119.00,
        image: "https://epocacosmeticos.vteximg.com.br/arquivos/ids/1065370/17581344811545.jpg?v=638939092407570000"
    },
    {
        id: 2,
        name: "Lattafa Fakhar Eau de Parfum",
        subtitle: "Fakhar Rose 100ml",
        category: "perfumes",
        badge: "Mais Vendido",
        price: 280.00,
        image: "https://epocacosmeticos.vteximg.com.br/arquivos/ids/2646704/17582505965066.jpg?v=639190373067270000"
    },
    {
        id: 3,
        name: "Sahari Collections Malik Al Sharq",
        subtitle: "Eau de Parfum 100ml",
        category: "perfumes",
        badge: "Árabe Premium",
        price: 150.00,
        image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 4,
        name: "Carolina Herrera 212 VIP Men",
        subtitle: "Eau de Toilette 100ml",
        category: "perfumes",
        badge: "Importado Orig.",
        price: 680.00,
        image: "https://epocacosmeticos.vteximg.com.br/arquivos/ids/485803-800-800/212-vip-men-carolina-hererra-100ml--3-.jpg?v=639192909607800000"
    },
    {
        id: 5,
        name: "Al-A'raaf Asfar Eau de Parfum",
        subtitle: "Frasco 100ml",
        category: "perfumes",
        badge: "Exclusivo",
        price: 145.00,
        image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 6,
        name: "New Brand Master Of Essence",
        subtitle: "Pink Gold EDP 100ml",
        category: "perfumes",
        badge: "Feminino",
        price: 160.00,
        image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 7,
        name: "Pendora Scents Cool Girl",
        subtitle: "Eau de Parfum 100ml",
        category: "perfumes",
        badge: "Tendência",
        price: 179.00,
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 8,
        name: "Diesel Fuel For Life Homme",
        subtitle: "Eau de Toilette",
        category: "perfumes",
        badge: "Masculino",
        price: 460.00,
        image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQjyhNA5VGvvAMwHzp41yyhpWyoJdsavJ75RO9tkq4gW4I1k6M5fkOCArzsAaeeBgA0UTVMzmDkysn-OgY"
    },
    {
        id: 9,
        name: "Lattafa Perfumes Asad Zanzibar",
        subtitle: "Eau de Parfum 100ml",
        category: "perfumes",
        badge: "Lançamento",
        price: 224.00,
        image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 10,
        name: "Sahari Collections Blue Sultan",
        subtitle: "Eau de Parfum 100ml",
        category: "perfumes",
        badge: "Árabe",
        price: 220.00,
        image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 11,
        name: "Dream Brand Body Splash Pure Seduction",
        subtitle: "Frasco Spray 250ml",
        category: "sprays",
        badge: "Body Splash",
        price: 78.00,
        image: "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 12,
        name: "Lattafa Ana Abiyedh Rouge",
        subtitle: "All Over Spray 150ml",
        category: "sprays",
        badge: "Body Spray",
        price: 153.00,
        image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 13,
        name: "Beauty Brand Loção Hidratante",
        subtitle: "Pure Seduction 236ml",
        category: "cremes",
        badge: "Creme Corporal",
        price: 175.00,
        image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 14,
        name: "Dream Brand Creme Perfumado",
        subtitle: "Inspiração Angel 200ml",
        category: "cremes",
        badge: "Hidratante",
        price: 82.00,
        image: "https://images.unsplash.com/photo-1608248597261-e4d0947726b2?auto=format&fit=crop&w=500&q=80"
    }
];
