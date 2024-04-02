import Item from "../Item/Item"


const ItemList = ({ products }) => {
    return (
        <section style={{display: 'flex', flexDirection: 'row', flexWrap:'wrap',gap:'30px', border:'20px', justifyContent: 'space-between'}}>
            {
                products.map((product) => {
                   
                    return <Item key={product.id} {...product}/>
                })
            }
        </section>
    )
}


export default ItemList