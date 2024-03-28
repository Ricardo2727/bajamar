import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link , useNavigate} from "react-router-dom"
import classes from "./CartView.module.css"



const CartView = () => {
    
    const navigate = useNavigate()
    const { cart,total, totalQuantity, removeItem} = useContext(CartContext)
    

    if (totalQuantity===0) {
            return (
                <div>
                    <h1 style={{ textAlign: 'center' }}>Tu carrito de compras</h1>
                    <h2 style={{ textAlign: 'center' }}>¡Carrito Vacío!</h2>
                    <button onClick={()=> navigate('/')}>Ir a Productos</button>
                </div>
            )
    } else{

        return (
       
            <div >
                <h1 style={{ textAlign: 'center' }}>Tu carrito de compras</h1>
                <div className={classes.divPrincipal}>
                <section >
                    {
                        cart.map(prod => {
                            return (
                                <article >
                                    <div className={classes.article} key={prod.id}>
                                        <div className={classes.ajusteIzq}>
                                            <div>
                                                <picture>
                                                    <img src={prod.img} style={{ width: 100, padding: '15px' }} alt="" />
                                                </picture>
                                            </div>
                                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', textAlign: 'left' }}>
                                                <h3>{prod.name}</h3>
                                                <h4>Cantidad: {prod.quantity}</h4>
    
                                            </div>
                                        </div>
    
                                        <div className={classes.ajusteDer}>
                                            <h3>Precio: {prod.price}</h3>
                                            <button onClick={() => removeItem(prod.id)}>Eliminar</button>
                                        </div>
                                    </div>
                                </article>
                            )
                        })
                    }
                </section>
                <section className={classes.resumen}>
                    <h2 style={{ textAlign: 'center' }}>Resumen de compra</h2>
                    <h3>Productos: {totalQuantity} unidad(es)</h3>
                    <h3>Total: $ {total}  </h3>
                    <button onClick={()=> navigate('/')}>Seguir Comprando</button>
                    <button ><Link to='/checkout'> Finalizar Compra</Link></button>
                </section>
                </div>
            </div>
        )
    }
}

export default CartView