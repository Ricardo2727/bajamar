import classes from './NavBar.module.css'
import CardWidget from '../CartWidget/CardWidget'
import Button from '../Button/Button'


const NavBar = () => {
    return (
        <header className={classes.header}>
            <h2 className={classes.title}>Bajamar.BA</h2>
            <nav className={classes.ajusteHeader}>
                <a className={classes.aHeader}>Inicio</a>
                <a className={classes.aHeader}>Cristaleria</a>
                <a className={classes.aHeader}>Bebidas</a>
                <a className={classes.aHeader}>Otros y más</a>
                <CardWidget className={classes.aHeader} />
            </nav>

            <div >
                <Button label='Log in' className={classes.buttonHeader} callback={() => console.log('clic en log in')} />
                <Button label='Register' className={classes.buttonHeader} callback={() => console.log('clic en registrer')} />
            </div>
        </header>
    )
}

export default NavBar