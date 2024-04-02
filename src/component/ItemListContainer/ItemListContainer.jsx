import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { useNotification } from '../../notification/hooks/useNotification'

import { getDocs, collection, query, where, orderBy } from 'firebase/firestore'
//import { getDocs, collection, query, where, orderBy } from '../../services/firebase/firebaseConfig'
import { db } from '../../services/firebase/firebaseConfig'



const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    const { showNotification } = useNotification()

    useEffect(() => {
        
        const productsCollection = categoryId ? (
            query(collection(db, 'products'), where('category', '==', categoryId))
        ) : (
            query(collection(db, 'products'), orderBy('name', 'asc'))
        )

        getDocs(productsCollection)
            .then(QuerySnapshot => {
                const productsAdapted = QuerySnapshot.docs.map(doc => {
                    const data = doc.data()

                    return { id: doc.id, ...data }
                })
                
                setProducts(productsAdapted)
            })
            .catch(() => {
                showNotification('error', ' Hubo un error cargado los productos')
            })


       
    }, [categoryId])

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer