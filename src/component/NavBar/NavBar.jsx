import classes from './NavBar.module.css'
import CardWidget from '../CartWidget/CardWidget'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'


const NavBar = () => {
    return (
        <header className={classes.header}>
            <div className={classes.ajusteHeaderIzq}>
                <h2 className={classes.title}>Bajamar.BA</h2>
                <nav>
                    {/* <Link className={classes.aHeader}>Inicio</Link> */}
                    <Link to='/category/Cocteleria' className={classes.aHeader}>Coctelería</Link>
                    <Link to='/category/Bebidas' className={classes.aHeader}>Bebidas</Link>
                    <Link to='/category/Otros' className={classes.aHeader}>Otros y más</Link>
                </nav>
            </div>
            <div className={classes.ajusteHeaderDer}>
                <CardWidget className={classes.aHeader} />
                <div >
                    <Button label='Log in' className={classes.buttonHeader} callback={() => console.log('clic en log in')} />
                    <Button label='Register' className={classes.buttonHeader} callback={() => console.log('clic en registrer')} />
                </div>
            </div>

        </header>
    )
}

export default NavBar