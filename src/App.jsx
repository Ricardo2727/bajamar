import React from 'react'
import './App.css'
import NavBar from './component/NavBar/NavBar'
import ItemListContainer from './component/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './component/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={'La Tiendita de Bajamar'} />}/>
          <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Productos según categoria:'} />}/>
          <Route path='/item/:itemId' element ={<ItemDetailContainer />}/>
          
        </Routes>
      </BrowserRouter>



    </>
  )
}

export default App


