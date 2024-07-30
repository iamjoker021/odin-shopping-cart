import styles from './Item.module.css'

export default function Item({item}) {

    return (
    <div id={item.id} className={styles.card}>
        <div>
            <img src={item.image} alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
        </div>
        <div>
            <div className={styles.flex}>
                <p>Rating: {item.rating.rate} ({item.rating.count})</p>
                <p className={styles.category}>{item.category}</p>
            </div>
            <div className={styles.flex}>
                <p>Price: {item.price}</p>
                <button type='button' className={`${styles.button} ${styles.addButton}`}>Add to Cart</button>
            </div>
            {item.count &&
            <div className={styles.flex}>
                <p>Cart: {item.count}</p>
                {<button type='button' className={`${styles.button} ${styles.removeButton}`}>Remove from Cart</button>}
            </div>
            }
        </div>
    </div>
    )
}