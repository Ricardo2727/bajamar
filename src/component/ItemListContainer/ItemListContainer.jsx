import { useEffect, useState } from 'react'
import { getProducts } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'


const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
            .then(result => {
                setProducts(result)
            })
            .catch(error => {
                console.log(error) //cada ves que hay un error siempre mostar un msj al usuario
            })
    }, [])

    return (
        <div>
            <h2>{greeting}</h2>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer