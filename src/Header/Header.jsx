import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import PropTypes from 'prop-types';

function Header({ title, cartCount }) {

    return (
        <header className={styles.header}>
            <h1>{title}</h1>
            <nav>
                <ul className={styles.navbar}>
                    <li>
                        <Link to="home">
                            Home
                        </Link>
                    </li>
                    <li>
                        <a href="cart">
                            Your Cart {cartCount > 0 && <span className={styles.cartCount}>{cartCount}</span>}
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

Header.propTypes = {
    cartCount: PropTypes.number.isRequired
}

export default Header;