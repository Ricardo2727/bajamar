import classes from './NavBar.module.css'
import CardWidget from '../CartWidget/CardWidget'
import Button from '../Button/Button'


const NavBar = () => {
    return (

        <header className={classes.header}>
            <h2>Bajamar.BA</h2>
            <nav className={classes.ajusteHeader}>
                <a className={classes.ajusteHeader}>Inicio</a>
                <a className={classes.ajusteHeader}>Cristaleria</a>
                <a className={classes.ajusteHeader}>Bebidas</a>
                <a className={classes.ajusteHeader}>Otros y más</a>
            </nav>
            <CardWidget/>
        
        <div >
            <Button label='Log in' className={classes.ajusteHeader} callback={() => console.log('clic en log in')}/>
            <Button label='Register' className={classes.ajusteHeader} callback={() => console.log('clic en registrer')} />
        </div>
        
        </header>
        
            
            )
}

export default NavBar