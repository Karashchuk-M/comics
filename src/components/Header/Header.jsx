
import { NavLink } from 'react-router-dom';
import { useRef } from 'react';
import cn from "classnames";
import logo from './logo.svg';
import img from './menu.svg';
import styles from './Header.module.css';
import { useState } from 'react';

const Header = () => {  
  const burger = useRef(null);

  const toggleBurger = () => {
    burger.current.styles.className='burger__mobyle';
  };
  return (
        <> 
                
         <header className={styles.header}>

          <div className={cn(styles.header__panel, styles.active)} >
         
            <div className={styles.wrapp__container}>
                <div className={styles.logo}>
                        <NavLink to="#" exact><img src={logo} alt="logo" /></NavLink>
                </div>
                <div ref={burger} className={cn(styles.burger, styles.burger__mobyle)} onClick={toggleBurger}>
                        <img className={styles.burger__menu} src={img} alt="menu" />
                </div>

                <div className={styles.wrapper}>
                    <div className={styles.menu}>
                    <ul>
                      <li><NavLink className={styles.active} to="/" exact>Главная</NavLink></li>
                      <li><NavLink to="/user" exact>Мои предметы</NavLink></li>
                    </ul>
              </div>
            </div>
          </div>
        </div>

    </header>

    </>
    )
}

export default Header;