import styles from '../ItemList.module.css'
import Item from '../Item/Item'
import { useOutletContext } from 'react-router-dom';

function Home() {
    const [itemList, setItemList] = useOutletContext() || [];
    const handleAdd = (e, item) => {
        itemList.forEach(element => {
            if (element.id === item.id) {
                element["count"] = (element["count"] || 0) + 1;
            }
        });
        setItemList([...itemList]);
    }

    const handleRemove = (e, item) => {
        itemList.forEach(element => {
            if (element.id === item.id) {
                element["count"] = element["count"] - 1;
            }
        });
        setItemList([...itemList]);
    }
    
    return (
        <section className={styles.cards}>
            {!(itemList && itemList.length > 0) && <p>Sorry No Item Found, Please try reloading and try after some time</p>}
            {(itemList && itemList.length > 0) && itemList.map(item => <Item key={item.id} item={item} handleAdd={handleAdd} handleRemove={handleRemove} />)}
        </section>
    )
}

export default Home;