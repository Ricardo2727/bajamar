import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { useNotification } from "../../notification/hooks/useNotification"
import { getDocs, collection, query, where, documentId, writeBatch, addDoc } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"

const Checkout = () => {

    const { showNotification } = useNotification()
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState(null)
    const [userData, setUserData] = useState({
        name:"",
        email:"",
        phone:""
    })
    const { cart, total, clearCart } = useContext(CartContext)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value
        });
    };

    // const createOrder = async (userData) => {
    const createOrder = async () => {
        try {
            setLoading(true)
            const objOrder = {
                buyer: {
                    name: userData.name,
                    email: userData.email,
                    phone: userData.phone
                },
                items: cart,
                total
            }

            const batch = writeBatch(db)
            const outOfStock = []
            const ids = cart.map(prod => prod.id)

            const productsCollection = query(collection(db, 'products'), where(documentId(), 'in', ids))

            const querySnapshot = await getDocs(productsCollection)
            const { docs } = querySnapshot

            docs.forEach(doc => {
                const data = doc.data()
                const stockDb = data.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart.quantity

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...data })
                }
            })

            if (outOfStock - length === 0) {
                batch.commit()

                const orderCollection = collection(db, 'orders')
                const { id } = await addDoc(orderCollection, objOrder)

                clearCart()
                setOrderId(id)
            } else {
                showNotification('error', ' Hay productos que no tienen stock disponibles')
                console.error('Hay productos que no tienen stock disponibles')
            }
        } catch (error) {
             console.error('Hubo un error en la generacion de la orden')
             showNotification('error', 'Hubo un error en la generacion de la orden')
        } finally {
            setLoading(false)
        }
    }
    if (loading) {
        return <h1>Su orden esta siendo generada...</h1>
    }
    if (orderId) {
        return <h1>El id de su orden es: {orderId}</h1>
    }

//     return (
//         <div>
//             <h1>Creando Orden de Compra</h1>
//             {/* <h3>crear formulario para el ingreso de datos</h3> */}

                



//             <h4>Total de la compra: {total}</h4>
//             <button onClick={createOrder}>Generar orden de compras</button>
//         </div>
//     )

// }

return (
    <div >
        <h1>Creando Orden de Compra</h1>
        <form onSubmit={createOrder} style={{
            display:'flex', 
            flexDirection:'column', 
            gap:'20px',
            alignItems:'center'}}>
            <div>
                <label  htmlFor="name">Nombre:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={userData.name}
                    onChange={handleChange}
                    required
                    style={{width:'600px', fontSize:'20px'}}
                />
            </div>
            <div>
                <label  htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={userData.email}
                    onChange={handleChange}
                    required
                    style={{width:'600px', fontSize:'20px'}}
                />
            </div>
            <div>
                <label  htmlFor="phone">Teléfono:</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={userData.phone}
                    onChange={handleChange}
                    required
                    style={{width:'600px', fontSize:'20px'}}
                />
            </div>
            <h4>Total de la compra: {total}</h4>
            
                <button type="submit">Generar orden de compra</button>
            
            
        </form>
    </div>
);
};

export default Checkout