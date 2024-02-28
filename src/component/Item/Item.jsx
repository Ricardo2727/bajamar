const Item = ({id, name, img, price}) => {
    return (
        <div >
            <h2> {name}</h2>
            <img src={img} style={{ width: 100 }} alt="" />
            <h3> Precio: $ {price}</h3>
        </div>
    )
}

export default Item