import { useState } from "react"


const ItemCount = ({initialValue=1, stock, onAdd}) =>{
const [count, setCount] = useState(initialValue) //valor inicial

const increm =() =>{
   if (count < stock){
        setCount(prev => prev + 1)
    }
}

const decrem =() =>{
    if (count>1) {
        setCount(prev => prev - 1)
    }   
}

    return(
        <div>
            <h3>{count}</h3>
            <button onClick={decrem} >-</button>
            <button onClick={()=> onAdd(count)} >Agregar al Carrito</button>
            <button onClick={increm} >+</button>
        </div>

    )
}

export default ItemCount