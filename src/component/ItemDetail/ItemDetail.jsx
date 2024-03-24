import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react"
import { Link } from "react-router-dom"

const ItemDetail = ({ id, name, category, img, price, description, stock }) => {

    const [quantity, setQuantity] = useState(0)

    const handleOnAdd = (quantity) => {
        console.log("cantidad del producto:" + quantity);
        setQuantity(quantity)
    }

    return (
        <article style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '100px', margin: '20px', justifyContent: 'center' }} >
            <div>
                <header>
                    <h2> {name}</h2>
                </header>
                <picture>
                    <img src={'.' + img} style={{ width: 250 }} alt="" />
                </picture>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', justifyContent: 'flex-end' }}>
                <section style={{textAlign:"left"}}>

                    <h4>Categoria: {category}</h4>

                    <h4>Descripcion: {description}</h4>

                    <h3>Precio: $ {price}</h3>

                </section>
                <footer >
                    {
                        quantity === 0 ? (
                            <ItemCount onAdd={handleOnAdd} stock={stock} />
                        ) : (
                            <Link to='/cart'>Ir al carrito</Link>
                        )
                    }
                </footer>
            </div>

        </article>
    )
}

export default ItemDetail