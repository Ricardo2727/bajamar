
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



const App = () => {


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


