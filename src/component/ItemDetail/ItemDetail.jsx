import ItemCount from "../ItemCount/ItemCount"
import { useState, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import { useNotification } from "../../notification/hooks/useNotification"



const ItemDetail = ({ id, name, category, img, price, description, stock }) => {

    const navigate = useNavigate()

    const { addItem, isInCart } = useContext(CartContext)

    const { showNotification } = useNotification()

    const handleOnAdd = (quantity) => {
        const objProductAdd = {
            id, name, price, quantity, img,
        }
        console.log(objProductAdd);

        showNotification('Success', `Se agrego correctamente ${quantity} ${name}`)
        

        addItem(objProductAdd)

    }

    return (
        <article style={{border:' 1px solid #ffe98546', marginTop:'20px', borderRadius: '4px'}}>
            <header>
                <h2 style={{fontSize:'40px'}}> {name}</h2>
            </header>

            <div style={{ display: 'flex', flexDirection: 'row', gap: '100px', padding:'20px', margin: '20px', marginBottom:'33.2px', justifyContent: 'center', alignItems:'center' }}>
                <div>
                    <picture>
                        <img src={img} style={{ width: 350 }} alt="" />
                    </picture>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', justifyContent: 'flex-end' }}>
                    <section style={{ textAlign: "left" }}>

                        <h3>Categoria: {category}</h3>

                        <h4 style={{ color: "white", fontStyle:'italic'}}>Descripcion: {description}</h4>

                        <h3>Precio: $ {price}</h3>
                          {
                            stock===0 ? (
                            <h3>¡Sin Stock disponible!</h3>
                          ):(
                            <h3>Stock disponible: {stock}</h3>
                          )
                            
                          }
                          

                    </section>
                    <footer  >
                        {
                            !isInCart(id) & stock>=1 ? (
                                <ItemCount onAdd={handleOnAdd} stock={stock} />
                            ) : (
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems:"center"}} >
                                    <button style={{width:'200px'}}><Link to='/cart'>Ir al carrito</Link></button>
                                    <button style={{width:'200px'}} onClick={() => navigate('/')}>Seguir Comprando</button>
                                </div>
                                
                            )
                        }
                        
                    </footer>
                </div>
            </div>


        </article>
    )
}

export default ItemDetail