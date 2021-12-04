import logo from './img/logo.svg';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Logo = () => {
    return (
        <>
            <div className={styles.Header__logo}>
                <Link to="#" exact><img src={logo} alt="logo" /></Link>
            </div>
        </>
     )
}


export default Logo;