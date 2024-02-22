import image from './assets/image.png'
import classes from './CardWidget.module.css'

const CardWidget =() => {
    return (
        <div className={classes.divCarrito}>
            <img src={image} alt='imagen widget'/>
            0
        </div>
    )
}
export default CardWidget