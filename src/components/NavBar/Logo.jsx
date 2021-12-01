import logo from './logo.svg';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';

const Logo = () => {
    return (
        <>
            <div className={styles.logo}>
                <NavLink to="#" exact><img src={logo} alt="logo" /></NavLink>
            </div>
        </>
     )
}


export default Logo;