import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import image from './assets/image.png'
import classes from './CardWidget.module.css'
import { Link } from 'react-router-dom'


const CardWidget =() => {
   
   const {totalQuantity} = useContext (CartContext)
   
    return (
        <Link to='/cart' className={classes.divCarrito}>
            <img src={image} alt='imagen widget'/>
            {totalQuantity}
        </Link>
    )
}
export default CardWidget