import { NavLink } from 'react-router-dom';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import cn from "classnames";
import logo from './logo.svg';
import styles from './Header.module.css';

const Header = () => {
    const menu = document.querySelector(".wrapper");
    const burger = document.querySelector(".burger-menu");
    burger.onclick = function () {
    burger.classList.toggle({active});

        if (burger.classList.contains("active")) {
            menu.classList.add("active");
            document.body.classList.add("active-menu");
        } else {
            menu.classList.remove("active");
            document.body.classList.remove("active-menu");
        }
    };
    return (
        <> 
         <header className={styles.header}>
            <div className={styles.container}>
                <div className={cn(styles.header__panel, styles.active)} >
                    <div className={styles.wrapp-container}>
                        <div className={styles.logo}>
                        <NavLink to="#" exact><img src={logo} alt="logo" /></NavLink>
                        </div>
                    <div className={styles.burger}>
                        <img className={styles.burger-menu} src="./img/menu.svg" alt="menu" />
                    </div>
            <div className={styles.wrappe}>
              <div className={styles.menu}>
                <ul>
                    <li><NavLink className={active} to="/" exact>Главная</NavLink></li>
                    <li><NavLink to="/user" exact>Мои предметы</NavLink></li>
                </ul>
              </div>
              <a href="token.html" className={header__button}
                >Создать NTF токен</a
              >
            </div>
          </div>
        </div>
      </div>
    </header>
    </>
    )
}

export default Header;