import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"

import { doc, getDoc } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"

const ItemDetailContainer = () => {
    
    const [product, setProduct] = useState(null)

    const {itemId} = useParams()

    useEffect(() => {
        const productDoc =  doc(db, 'products', itemId)
        
        getDoc(productDoc)
            .then(QueryDocumentSnapshot => {
                
                const data = QueryDocumentSnapshot.data()
                const productAdapted = { id: QueryDocumentSnapshot.id, ...data}
            
            
            setProduct(productAdapted)
            
            
            })
            .catch(() => {
                showNotification ('error',  ' Hubo un error al cargar el producto')
            })
    }, [itemId])

    return (
        <main>
            <ItemDetail {...product}/>
        </main>
    )
}

export default ItemDetailContainer