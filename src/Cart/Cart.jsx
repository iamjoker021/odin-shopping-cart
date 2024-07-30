import styles from '../ItemList.module.css'
import { useOutletContext } from "react-router-dom";
import Item from "../Item/Item";

function Cart() {
    let [cartList] = useOutletContext() || [];
    cartList = cartList.filter(cart => cart.count > 0);
    return (
        <section className={styles.cards}>
            {cartList.length > 0 && cartList.map(cart => <Item key={cart.id} item={cart} />)}
            {cartList.length <= 0 && <p>No Items Found Add Item from Home Page</p>}
        </section>
    )
}

export default Cart;