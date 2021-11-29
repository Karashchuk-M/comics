import PropTypes from 'prop-types';
import img from "./menu.svg"
import styles from './BurgerMenu.module.css';

const BurgerMenu = () => {
    const menu = document.querySelector(".wrapper");
    const burger = document.querySelector(".burger-menu");
    burger.onclick = function () {
    burger.classList.toggle("active");

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
            <div className={styles.burger} >
                <img className={styles.burger-menu} src={img} alt="menu" />
            </div>
        </>
     )
}

BurgerMenu.propTypes = {
 //optional: PropTypes.string
}

export default BurgerMenu;