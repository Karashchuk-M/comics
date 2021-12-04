import PropTypes from 'prop-types';
import styles from './NavBar.module.css';
import NavLinks from './NavLinks';
import img from './burger.svg';
import { useState } from 'react';

const MobileNavigation = () => {
    const [open, setOpen] = useState(false);
    
    const closeMobileMenu = () => setOpen(false);
    return (
        <>
            <div className={styles.MobileNavigation}>   
                <img className={styles.MobileNavigation__img}
                    src={img}
                    alt="menu"
                    onClick={() => setOpen(!open)
                    }    
                />
                {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu}/>}
            </div>
        </>
     )
}

MobileNavigation.propTypes = {
    //ptional: PropTypes.string
}

export default MobileNavigation;