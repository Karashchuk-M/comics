import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './NavBar.module.css';

const NavLinks = (props) => {
    return (
        <>
 
                    <ul>
                      <li onClick={() => props.isMobile && props.closeMobileMenu()}><NavLink  to="/" exact  activeClassName={styles.active} >Главная</NavLink></li>
                      <li onClick={() => props.isMobile && props.closeMobileMenu()}><NavLink to="/user" activeClassName={styles.active}>Мои предметы</NavLink></li>
                      <li onClick={() => props.isMobile && props.closeMobileMenu()}><NavLink  to="/user" activeClassName={styles.active}>Аукцион</NavLink></li>
                      <li onClick={() => props.isMobile && props.closeMobileMenu()}><NavLink to="/user" activeClassName={styles.active}>Отслеживаемое</NavLink></li>
                      <li onClick={() => props.isMobile && props.closeMobileMenu()}><NavLink  to="/about" activeClassName={styles.active}>Как это работает?</NavLink></li>
                      <li onClick={() => props.isMobile && props.closeMobileMenu()}><NavLink className={styles.NavBar__wallet} to="/user" activeClassName={styles.active}>Подключить кошелек</NavLink></li>
                      <li onClick={() => props.isMobile && props.closeMobileMenu()}><NavLink className={styles.token__button} to="/#wallet">Создать NTF токен</NavLink></li>
                    </ul>

        </>
     )
}

NavLinks.propTypes = {
    optional: PropTypes.string
}

export default NavLinks;