import PropTypes from 'prop-types';
import styles from './Header.module.css';
import NavLinks from './NavLinks';

const Navigation = () => {
    return (
        <>
            <div className={styles.HeaderDesktop}>
                <NavLinks />
                
            </div>
        </>
     )
}

Navigation.propTypes = {
    //optional: PropTypes.string
}

export default HeaderDesktop;