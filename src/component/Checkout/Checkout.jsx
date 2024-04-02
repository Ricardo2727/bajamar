import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { useNotification } from "../../notification/hooks/useNotification"
//import { getDocs, collection, query, where, documentId, writeBatch, addDoc, Timestamp } from "firebase/firestore"
import { getDocs, collection, query, where, documentId, writeBatch, addDoc, Timestamp } from "../../services/firebase/firebaseConfig"
import { db } from "../../services/firebase/firebaseConfig"

const Checkout = () => {

    const { showNotification } = useNotification()
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState(null)
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        emailConfirm: "",
        phone: ""
    })
    const { cart, total, clearCart } = useContext(CartContext)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value
        });
    };

    
    const createOrder = async (e) => {

        e.preventDefault();

        try {
            setLoading(true)

            if (userData.email !== userData.emailConfirm) {
                showNotification('error', 'Los correos electrónicos ingresados no coinciden');
                setLoading(false); 
                return; 
            }

            const objOrder = {
                buyer: {
                    name: userData.name,
                    email: userData.email,
                    phone: userData.phone
                },
                items: cart,
                total,
                date: Timestamp.fromDate(new Date())
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

    
    const isFormValid = userData.name !== "" && userData.email !== "" && userData.emailConfirm !== "" && userData.phone !== "";

    return (
        <div >
            <h1>Creando Orden de Compra</h1>
            <form onSubmit={createOrder} style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                alignItems: 'left'
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '100px',
                    justifyContent: 'center',
                }} >
                    <label style={{ width: '10px' }} htmlFor="name">Nombre:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={userData.name}
                        onChange={handleChange}
                        required
                        style={{
                            width: '400px',
                            fontSize: '18px',
                        }}
                    />
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '100px',
                    justifyContent: 'center',
                }}>
                    <label style={{ width: '10px' }} htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={userData.email}
                        onChange={handleChange}
                        required
                        style={{
                            width: '400px',
                            fontSize: '18px'
                        }}
                    />
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '100px',
                    justifyContent: 'center',
                }}>
                    <label style={{ width: '10px' }} htmlFor="emailConfirm">Confirmar Email:</label>
                    <input
                        type="email"
                        id="emailConfirm"
                        name="emailConfirm"
                        value={userData.emailConfirm}
                        onChange={handleChange}
                        required
                        style={{ width: '400px', fontSize: '18px' }}
                    />
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '100px',
                    justifyContent: 'center',
                }}>
                    <label style={{ width: '10px' }} htmlFor="phone">Teléfono:</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={userData.phone}
                        onChange={handleChange}
                        required
                        style={{ width: '400px', fontSize: '18px' }}
                    />
                </div>

                <h4>Total de la compra: {total}</h4>
                <div>
                    <button style={{ width: '200px' }} type="submit" disabled={!isFormValid}>Generar orden de compra</button>
                </div>

            </form>
        </div>
    );
};

export default Checkout