export const products = [
   
    {
        id: 1,
        name: 'Xbox Series S',
        price: 350,
        despcription: 'Xbox Series S',
        stock: 5,
        img: 'https://static-geektopia.com/storage/t/i/333/33356/300x300/a4c45daf6c57a34c8bf6a5e45.jpg',
        category: 'Microsoft'
      
    },
    {
        id: 2,
        name: 'PlayStation 5',
        price: 520,
        despcription: 'PlayStation 5',
        stock: 5,
        img: 'https://www.elryan.com/img/300/300/resize/catalog/product/p/s/ps5-slim-hero-4_1_1.png',
        category: 'Sony'
    },
    {
        id: 3,
        name: 'PlayStation 4',
        price: 260,
        despcription: 'PlayStation 4',
        stock: 5,
        img: 'https://media.game.es/COVERV2/3D_L/115/115351.png',
        category: 'Sony'
    },
    {
        id: 4,
        name: 'PlayStation 3',
        price: 140,
        despcription: 'PlayStation 3',
        stock: 20,
        img: 'https://media.game.es/COVERV2/3D_L/070/070795.png',
        category: 'Sony'
    },
    {
        id: 5,
        name: 'PlayStation 2',
        price: 120,
        despcription: 'PlayStation 2',
        stock: 5,
        img: 'https://media.game.es/COVERV2/3D_L/090/090245.png',
        category: 'Sony'
    },
    {
        id: 6,
        name: 'PlayStation 1',
        price: 200,
        despcription: 'PlayStation 1',
        stock: 5,
        img: 'https://bedfordshirephonesales.co.uk/cdn/shop/files/IMG-0160_300x300.jpg?v=1724287906',
        category: 'Sony'
    },
    {
        id: 7,
        name: 'PSP',
        price: 155,
        despcription: 'PSP',
        stock: 5,
        img: 'https://images.freeimages.com/fic/images/icons/382/console/300/psp_black_icon.png',
        category: 'Sony'
    },
    {
        id: 8,
        name: 'PSVITA',
        price: 160,
        despcription: 'PSVITA',
        stock: 3,
        img: 'https://www.rockandpop.cl/wp-content/uploads/2018/05/ps-vita-oled-nueva-en-caja-original-D_NQ_NP_618668-MLA26413979423_112017-F-300x300.jpg',
        category: 'Sony'
    },
    {
        id: 9,
        name: 'Xbox Classic',
        price: 171,
        despcription: 'Xbox Classic',
        stock: 2,
        img: 'https://jeuxvideogamex.com/cdn/shop/files/jeux-video-game-x-console-console-filage-manette-officiel-type-s-noir-amped-jeu-livret-et-boitier-et-boite-avec-usure-console-xbox-original-system-en-boite-33513002401845.jpg?v=1711647185',
        category: 'Microsoft'
    },
    {
        id: 10,
        name: 'Xbox Series X',
        price: 600,
        despcription: 'Xbox Series X',
        stock: 1000,
        img: 'https://assets1.ignimgs.com/2019/12/13/xbox-series-x---button-01a-1576278376804.jpg?width=300&crop=1%3A1%2Csmart&auto=webp',
        category: 'Microsoft'
    }, 
];

export const getProducts = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res(products);
        }, 2500);
    });
};

export const getProductById = (id) => {
    return new Promise((res) => {
        const productoFiltrado = products.find((product) => product.id === parseInt(id));
        setTimeout(() => {
            res(productoFiltrado);
        }, 2000);
    });
};

export const getProductByCategory = (category) => {
    return new Promise((res) => {
        const productosFiltrados = products.filter((product) => product.category === category);
        setTimeout(() => {
            res(productosFiltrados);
        }, 2000);
    });
};