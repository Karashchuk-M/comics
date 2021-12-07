import NavBar from '../NavBar';
import Logo from './Logo';
import HeaderDesktop from './HeaderDesktop';
import MobileHeader from './MobileHeader';

import styles from './Header.module.css';

const Header = () => {  
  return (
        <>                
            <header>
               <Logo />
               <HeaderDesktop />
               <MobileHeader />
            
            </header>
    </>
    )
}

export default Header;