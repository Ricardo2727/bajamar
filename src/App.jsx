import React from 'react'
import './App.css'
import NavBar from './component/NavBar/NavBar'
import ItemListContainer from './component/ItemListContainer/ItemListContainer'
import ItemCount from './component/ItemCount/ItemCount'

function App() {
  return (
    <>
      <NavBar />
      <h1>'LA TIENDITA'</h1>
      
      <ItemListContainer greeting={'Seguimos trabajando para poder abrir muy pronto nuestra tienda virtual.'}/>
      {/* <ItemListContainer greeting={'Mientras jugá a adivinar nuestro número secreto:'}/>
      <ItemCount initialValue={1} min={0} max={999} nroAdivinar={11}/> */}
      
      
    </>
  )
}

export default App