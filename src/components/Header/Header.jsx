import { NavLink } from 'react-router-dom';
import logo from './logo.svg';
import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles.container}>
            <ul className={styles.list__container}>
                <li><NavLink to="#" exact><img src={logo} alt="logo" /></NavLink></li>
                <li><NavLink to="/" exact>Главная</NavLink></li>
                <li><NavLink to="/user" exact>Мои предметы</NavLink></li>

            </ul>
        </div>
    )
}

export default Header;