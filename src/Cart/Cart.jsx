import styles from '../ItemList.module.css'
import cartStyle from './Cart.module.css'
import { useOutletContext } from "react-router-dom";
import Item from "../Item/Item";

function Cart() {
    let [itemList, setItemList] = useOutletContext() || [[]];
    const cartList = itemList.filter(cart => cart.count > 0);

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
        <div className={cartStyle.flexHorizontal}>
            <section className={styles.cards}>
                {cartList.length > 0 && cartList.map(cart => <Item key={cart.id} item={cart} handleAdd={handleAdd} handleRemove={handleRemove} />)}
                {cartList.length <= 0 && <p>No Items Found Add Item from Home Page</p>}
            </section>
            {cartList.length>0 &&
            <table className={cartStyle.table}>
                <thead>
                    <tr>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {cartList.map(cart => (
                        <tr key={cart.id}>
                            <td>{cart.price}</td>
                            <td>{cart.count}</td>
                            <td>{cart.price * cart.count}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={2}><em>Total Price</em></td>
                        <td>{cartList.map(cart => cart.price * cart.count).reduce((acc, val) => acc+val)}</td>
                    </tr>
                </tfoot>
            </table>
            }
        </div>
    )
}

export default Cart;