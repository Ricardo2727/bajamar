import classes from './NavBar.module.css'
import CardWidget from '../CartWidget/CardWidget'
import Button from '../Button/Button'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { collection, getDocs, orderBy, query } from 'firebase/firestore'
//import { collection, getDocs, orderBy, query } from '../../services/firebase/firebaseConfig'
import { db } from '../../services/firebase/firebaseConfig'

const NavBar = () => {
    const [categories, setCategories] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        const categoriesColletion = query (collection(db, 'categories'), orderBy('order'), )

        getDocs(categoriesColletion)
            .then (QuerySnapshot => {
                const categoriesAdapted = QuerySnapshot.docs.map(doc => {
                    const data =doc.data()
                    return {id:doc.id, ...data}
                })
                setCategories(categoriesAdapted)
            })
            .catch(() => {
                showNotification ('error',  ' Hubo un error al cargar el producto')
            })
}, [])


    return (
        <header className={classes.header}>
            <div className={classes.ajusteHeaderIzq}>
                <h2 onClick={()=> navigate('/')} className={classes.title}>Bajamar.BA</h2>
                <nav>
                    {
                        categories.map(cat => {
                            return <Link className={classes.access} key={cat.id} to= {`/category/${cat.slug}`}>{cat.name}</Link>
                        })
                    }
                </nav>
            </div>
            <div className={classes.ajusteHeaderDer}>
                <CardWidget className={classes.aHeader} />
                <div >
                    <Button label='Log in' className={classes.buttonHeader} callback={() => console.log('clic en log in')} />
                </div>
            </div>

        </header>
    )
}

export default NavBar