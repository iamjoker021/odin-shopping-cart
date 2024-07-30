import styles from './Item.module.css'

export default function Item({cart}) {
    return (
    <div id={cart.id} className={styles.card}>
        <div>
            <img src={cart.image} alt={cart.title} />
            <h2>{cart.title}</h2>
            <p>{cart.description}</p>
        </div>
        <div>
            <div className={styles.flex}>
                <p>Rating: {cart.rating.rate} ({cart.rating.count})</p>
                <p className={styles.category}>{cart.category}</p>
            </div>
            <div className={styles.flex}>
                <p>Price: {cart.price}</p>
                <button type='button' className={styles.button}>Add to Cart</button>
            </div>
        </div>
    </div>
    )
}