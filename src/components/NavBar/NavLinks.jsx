import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './NavBar.module.css';

const NavLinks = (props) => {
    return (
        <>
 
                    <ul>
                      <li onClick={() => props.isMobile && props.closeMobileMenu()}><NavLink  to="/" exact>Главная</NavLink></li>
                      <li onClick={() => props.isMobile && props.closeMobileMenu()}><NavLink to="/user" exact>Мои предметы</NavLink></li>
                      <li onClick={() => props.isMobile && props.closeMobileMenu()}><NavLink  to="/#" exact>Аукцион</NavLink></li>
                      <li onClick={() => props.isMobile && props.closeMobileMenu()}><NavLink to="/#" exact>Отслеживаемое</NavLink></li>
                      <li onClick={() => props.isMobile && props.closeMobileMenu()}><NavLink  to="/#about" exact>Как это работает?</NavLink></li>
                      <li onClick={() => props.isMobile && props.closeMobileMenu()}><NavLink className={styles.NavBar__wallet} to="/#wallet" exact>Подключить кошелек</NavLink></li>
                      <li onClick={() => props.isMobile && props.closeMobileMenu()}><NavLink className={styles.token__button} to="/#wallet" exact>Создать NTF токен</NavLink></li>
                    </ul>

        </>
     )
}

NavLinks.propTypes = {
    optional: PropTypes.string
}

export default NavLinks;