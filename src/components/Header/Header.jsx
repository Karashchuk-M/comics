import NavBar from './NavBar';
import { NavLink } from 'react-router-dom';

import styles from './Header.module.css';

const Header = () => {  
  return (
        <>                
         <header className={styles.header}>

          <div className={styles.header__panel} >

                <NavBar />
          </div>
        </header>

    </>
    )
}

export default Header;