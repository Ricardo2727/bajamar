import { useState, createContext } from 'react'


export const CartContext = createContext()


export const CartProvider = ({children}) =>{
    
    const [cart, setCart] = useState([])
    console.log(cart);
  
    const addItem = (productToAdd) => {
      if (!isInCart(productToAdd.id)) {
        setCart(prev => [...prev, productToAdd])
      } else {
        console.error('El producto ya fue agregado')
      }
    }
  
    const isInCart = (id) => {
      return cart.some(prod => prod.id === id)
    }
  
    const clearCart = () => {
      setCart([])
    }

    const getTotalQuantity = () => {
      let accu = 0
  
      cart.forEach(prod => {
        accu += prod.quantity
      })
      return accu
    }
  
    const totalQuantity = getTotalQuantity()
    
    const getTotal = () => {
      let accu  = 0
      
      cart.forEach (prod => {
        accu += prod.quantity * prod.price
      })
      return accu
    }
    
    const total = getTotal()
    

    const removeItem = (id) => {
      const updateProductsCart = cart.filter(prod => prod.id !== id )
      setCart(updateProductsCart)
  }


console.log(total);

    return (
        <CartContext.Provider value={{ 
          cart, 
          addItem, 
          totalQuantity, 
          total, 
          clearCart,
          removeItem,
          isInCart,
           }}>
            {children}
        </CartContext.Provider>
    )
}

