const products = [
{
    id: '1',
    name:'Kit Gin Buenos Aires 1',
    price: 3000,
    category: 'Bebidas',
    img: './src/imagenes/1kitgin1.png',
    stock: 25,
    description: 'Description de Kit Gin Buenos Aires 1'
}, 
{id: '2',name:'Teterita Té',price: 2000,category: 'Otros',img: './src/imagenes/2teterate.png',stock: 1,description: 'Description de Teterita de Té'},
{id: '3',name:'Kit Coctel Premium',price: 1500,category: 'Cocteleria',img: './src/imagenes/3kitcoctelp.png',stock: 10,description: 'Description de Kit Coctel Premium'},
{id: '4',name:'Tacitas Orientales',price: 1500,category: 'Otros',img: './src/imagenes/4tacitasori.png',stock: 10,description: 'Description de Tacitas Orientales'},
{id: '5',name:'Blue Moon',price: 500,category: 'Bebidas',img: './src/imagenes/5bluemoon.png',stock: 10,description: 'Description de Blue Moon'},
{id: '6',name:'Coctelera',price: 500,category: 'Cocteleria',img: './src/imagenes/6cocteleras.png',stock: 10,description: 'Description de Cocteleras'},
{id: '7',name:'Vaso Whisky',price: 1500,category: 'Cocteleria',img: './src/imagenes/7vasowis.png',stock: 10,description: 'Description de Vaso Whisky'},
{id: '8',name:'Velas Aromaticas',price: 1500,category: 'Otros',img: './src/imagenes/8velas.png',stock: 10,description: 'Description de Velas Aromaticas'},
{id: '9',name:'Kit Gin Buenos Aires 2',price: 3500,category: 'Bebidas',img: './src/imagenes/9kitgin2.png',stock: 10,description: 'Description de Kit Gin Buenos Aires 2'},
{id: '10',name:'Revolvedor Bajamar',price: 1500,category: 'Cocteleria',img: './src/imagenes/10revol.png',stock: 10,description: 'Description de Revolvedor Bajamar'},
]

export const getProducts = () => {
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve(products)
        },1000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}

export const getProductById = (itemId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === itemId))
        }, 100)
    })
}