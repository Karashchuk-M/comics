import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './NavBar.module.css';

const NavLinks = (props) => {
    return (
        <>
 
                    <ul>
                      <li onClick={() => props.isMobile && props.closeMobileMenu()}><NavLink  to="/" exact>Главная</NavLink></li>
                      <li onClick={() => props.isMobile && props.closeMobileMenu()}><NavLink to="/user" >Мои предметы</NavLink></li>
                      <li onClick={() => props.isMobile && props.closeMobileMenu()}><NavLink to="/#" >Отслеживаемое</NavLink></li>
                      <li onClick={() => props.isMobile && props.closeMobileMenu()}><NavLink  to="/#about" >Как это работает?</NavLink></li>
                      <li onClick={() => props.isMobile && props.closeMobileMenu()}><NavLink className={styles.NavBar__wallet} to="/#wallet" >Подключить кошелек</NavLink></li>
                      <li onClick={() => props.isMobile && props.closeMobileMenu()}><NavLink className={styles.token__button} to="/#wallet" >Создать NTF токен</NavLink></li>
                    </ul>

        </>
     )
}

NavLinks.propTypes = {
    optional: PropTypes.string
}

export default NavLinks;