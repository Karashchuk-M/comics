
import PropTypes from 'prop-types';
import styles from './NavBar.module.css';
import Navigation from './Navigation';
import MobileNavigation from './MobileNavigation';
import Logo from './Logo';


const NavBar = () => {
    return (
        <>
            <div className={styles.NavBar}>
                <Logo />
                <Navigation />
                <MobileNavigation />
            </div>
        </>
     )
}

NavBar.propTypes = {
    //optional: PropTypes.string
}

export default NavBar;