import { useState } from "react"


const ItemCount =(props) =>{
const [count, setCount] = useState(props.initialValue) //valor inicial

const increm =() =>{
   if (count < props.max){
        setCount(prev => prev + 1)
    }
}

const decrem =() =>{
    if (count>props.min) {
        setCount(prev => prev - 1)
    }   
}

const reset =() =>{
    setCount(0)
}

const adivinar =() =>{
    if (count==props.nroAdivinar){
        alert ('¡Felicidades!, Si adivinaste')
    }else {
        alert ('No adivinaste, intentalo nuevamente')
    }
}


    return(
        <div>
            <h3>{count}</h3>
            <button onClick={decrem} >Decrem</button>
            <button onClick={increm} >Increm</button>
            <button onClick={reset} >Reset</button>
            <button onClick={adivinar} >Adivinar</button>
        </div>

    )
}

export default ItemCount