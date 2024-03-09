import { useEffect, useState } from 'react'
import { getProducts, getProductsByCategory } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'


const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()

    useEffect(() => {
        setLoading (true)
        const asyncFuntion = categoryId ? getProductsByCategory : getProducts
       
        asyncFuntion(categoryId)
            .then(result => {
                setProducts(result)
            })
            .catch(error => {
                console.log(error) //cada ves que hay un error siempre mostar un msj al usuario
            })
            .finally(()=> {
                setLoading (false)
            })
    }, [categoryId])

if (loading) {
    return <h2>Cargando productos...</h2>
 }


    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer