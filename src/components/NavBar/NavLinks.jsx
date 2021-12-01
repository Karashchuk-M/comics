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
                      <li onClick={() => props.isMobile && props.closeMobileMenu()}><NavLink to="/#wallet" exact>Подключить кошелек</NavLink></li>
                    </ul>

        </>
     )
}

NavLinks.propTypes = {
    optional: PropTypes.string
}

export default NavLinks;