import styles from './Home.module.css'
import Item from '../Item/Item'

function Home({itemList=[]}) {
    return (
        <section className={styles.cards}>
            {itemList.length > 0 && itemList.map(cart => <Item key={cart.id} cart={cart} />)}
            {itemList.length <= 0 && <p>Sorry No Item Found, Please try reloading and try after some time</p>}
        </section>
    )
}

export default Home;