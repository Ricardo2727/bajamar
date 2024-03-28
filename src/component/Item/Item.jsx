import { Link } from "react-router-dom"
import classes from './Item.module.css'


const Item = ({id, name, category, img, price}) => {
    return (
        <article className={classes.style}>
            <h4> Categoria: {category}</h4>
            <h2> {name}</h2>
            <img src={img} style={{ width: 150 }} alt="" />
            <h3> Precio: $ {price}</h3>
            <Link to={`/item/${id}`} style={{marginBottom:'21px'}}>Ver más</Link>
        </article>
    )
}

export default Item