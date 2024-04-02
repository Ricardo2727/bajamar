
import React from 'react'
import './App.css'
import NavBar from './component/NavBar/NavBar'
import ItemListContainer from './component/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './component/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { NotificacionProvider } from './notification/NotificationsService'
import CartView from './component/CartView/CartView'
import Checkout from './component/Checkout/Checkout'

import { useEffect } from 'react'
import { collection } from 'firebase/firestore'
import { db } from './services/firebase/firebaseConfig'
import { addDoc } from 'firebase/firestore'


const App = () => {

//   useEffect(() => {
//     const products = [
//        {
//        id: '1',
//        name: 'Kit Gin Buenos Aires 1',
//        price: 3000,
//        category: 'Bebidas',
//        img: 'https://firebasestorage.googleapis.com/v0/b/backend-bajamar.appspot.com/o/img_bajamar%2F1kitgin1.png?alt=media&token=7ee0f7e3-db8d-4b65-a0ed-03563b5ec7b8',
//        stock: 25,
//        description: 'Descripción de Kit Gin Buenos Aires 1'
//      },
//      { id: '2', name: 'Teterita Té', price: 2000, category: 'Otros', img: 'https://firebasestorage.googleapis.com/v0/b/backend-bajamar.appspot.com/o/img_bajamar%2F2teterate.png?alt=media&token=7d6170e7-4b20-4ce2-9941-355cd426e80d', stock: 5, description: 'Description de Teterita de Té' },
//      { id: '3', name: 'Kit Coctel Premium', price: 1500, category: 'Cocteleria', img: 'https://firebasestorage.googleapis.com/v0/b/backend-bajamar.appspot.com/o/img_bajamar%2F3kitcoctelp.png?alt=media&token=cd7be276-007b-48ee-9e6b-8039359c27b4', stock: 20, description: 'Description de Kit Coctel Premium' },
//       { id: '4', name: 'Tacitas Orientales', price: 1500, category: 'Otros', img: 'https://firebasestorage.googleapis.com/v0/b/backend-bajamar.appspot.com/o/img_bajamar%2F4tacitasori.png?alt=media&token=b50e149e-120e-4178-9e3a-e0d78f692cb7', stock: 15, description: 'Description de Tacitas Orientales' },
//      { id: '5', name: 'Blue Moon', price: 500, category: 'Bebidas', img: 'https://firebasestorage.googleapis.com/v0/b/backend-bajamar.appspot.com/o/img_bajamar%2F5bluemoon.png?alt=media&token=2965f346-a03e-4f44-aab8-ea9a4817331f', stock: 10, description: 'Description de Blue Moon' },
//      { id: '6', name: 'Coctelera', price: 500, category: 'Cocteleria', img: 'https://firebasestorage.googleapis.com/v0/b/backend-bajamar.appspot.com/o/img_bajamar%2F6cocteleras.png?alt=media&token=c4d52706-2d87-48c7-b468-50c40ea0426c', stock: 8, description: 'Description de Cocteleras' },
//      { id: '7', name: 'Vaso Whisky', price: 1500, category: 'Cocteleria', img: 'https://firebasestorage.googleapis.com/v0/b/backend-bajamar.appspot.com/o/img_bajamar%2F7vasowis.png?alt=media&token=9030cf7a-951b-4869-8b15-bbf5bb1cf68b', stock: 20, description: 'Description de Vaso Whisky' },
//     { id: '8', name: 'Velas Aromaticas', price: 1500, category: 'Otros', img: 'https://firebasestorage.googleapis.com/v0/b/backend-bajamar.appspot.com/o/img_bajamar%2F8velas.png?alt=media&token=10c8b7ff-d889-4187-8d63-3761712ba950', stock: 10, description: 'Description de Velas Aromaticas' },
//      { id: '9', name: 'Kit Gin Buenos Aires 2', price: 3500, category: 'Bebidas', img: 'https://firebasestorage.googleapis.com/v0/b/backend-bajamar.appspot.com/o/img_bajamar%2F9kitgin2.png?alt=media&token=66ce8b4b-fb2d-42fd-99d6-ef7976839c45', stock: 10, description: 'Description de Kit Gin Buenos Aires 2' },
//      { id: '10', name: 'Revolvedor Bajamar', price: 1500, category: 'Cocteleria', img: 'https://firebasestorage.googleapis.com/v0/b/backend-bajamar.appspot.com/o/img_bajamar%2F10revol.png?alt=media&token=55dcc732-8b5f-410b-b085-fccb1aa0e9d2', stock: 3, description: 'Description de Revolvedor Bajamar' },
//    ]

//    const productsCollection = collection(db, 'products')

//    products.forEach(async prod => {
//      console.log('addDoc')
//      await addDoc(productsCollection, prod)
//    })
// }, [])

  return (
    <>
      <NotificacionProvider>
        <CartProvider>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path='/' element={<ItemListContainer greeting={'LA TIENDITA DE BAJAMAR'} />} />
              <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Productos según categoria:'} />} />
              <Route path='/item/:itemId' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<CartView />} />
              <Route path='/checkout' element={<Checkout/>}/>
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </NotificacionProvider>
    </>
  )
}

export default App


