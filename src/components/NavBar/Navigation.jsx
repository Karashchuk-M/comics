import PropTypes from 'prop-types';
import styles from './NavBar.module.css';
import NavLinks from './NavLinks';

const Navigation = () => {
    return (
        <>
            <div className={styles.Navigation}>
                <NavLinks />
            </div>
        </>
     )
}

Navigation.propTypes = {
    //optional: PropTypes.string
}

export default Navigation;