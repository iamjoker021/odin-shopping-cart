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
                {!item.isOrdered && <button type='button' className={styles.button}>Add to Cart</button>}
                {item.isOrdered && <button type='button' className={styles.buttonDisabled} disabled>Added to Cart</button>}
            </div>
        </div>
    </div>
    )
}