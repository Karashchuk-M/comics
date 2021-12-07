
import styles from './NavBar.module.css';
import NavLinks from './NavLinks';
import img from './img/burger.svg';
import { useState } from 'react';

const MobileHeader = () => {
    const [open, setOpen] = useState(false);
    
    const closeMobileMenu = () => setOpen(false);
    return (
        <>
            <div className={styles.MobileHeader}>   
                <img className={styles.MobileHeader__img}
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
export default MobileHeader;