import image from './assets/image.png'
import classes from './CardWidget.module.css'
import { Link } from 'react-router-dom'


const CardWidget =() => {
    return (
        <Link to='/cart' className={classes.divCarrito}>
            <img src={image} alt='imagen widget'/>
            0
        </Link>
    )
}
export default CardWidget