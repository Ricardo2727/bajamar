import ItemCount from "../ItemCount/ItemCount"



const ItemDetail = ({ name, category, img, price, description, stock }) => {
    return (
        <article style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '100px', margin: '20px', justifyContent: 'center' }} >
            <div>
                <h4>Categoria: {category}</h4>
                <h2> {name}</h2>
                <img src={'.' + img} style={{ width: 250 }} alt="" />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column',  gap: '2px',justifyContent: 'flex-end'}}>
                
                <h3> Precio: $ {price}</h3>
                <h4>Descripcion: {description}</h4>
                <ItemCount stock={stock} />
            </div>
        </article>
    )
}

export default ItemDetail