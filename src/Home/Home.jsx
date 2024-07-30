import styles from '../ItemList.module.css'
import Item from '../Item/Item'
import { useOutletContext } from 'react-router-dom';

function Home() {
    const [itemList] = useOutletContext() || [];
    return (
        <section className={styles.cards}>
            {itemList.length > 0 && itemList.map(item => <Item key={item.id} item={item} />)}
            {itemList.length <= 0 && <p>Sorry No Item Found, Please try reloading and try after some time</p>}
        </section>
    )
}

export default Home;