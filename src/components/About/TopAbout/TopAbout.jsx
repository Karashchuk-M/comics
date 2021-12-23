import TopBackground from '@components/TopBackground';
import Logo from "./logo.svg";

import PropTypes from 'prop-types';
import styles from './TopAbout.module.css';

const TopAbout = () => {
    return (
        <>
            
            <div className={styles.BigLogo}>

                <img className={styles.BigLogo__img} src={Logo} alt="logo" />
            </div>
        </>
     )
}

TopAbout.propTypes = {
    optional: PropTypes.string
}

export default TopAbout;