const Button = (props)=>{
    return(
        <button 
        onClick={props.callback} 
        style={{color:"white"}}>
            {props.label}
        </button>
    )
}

export default Button