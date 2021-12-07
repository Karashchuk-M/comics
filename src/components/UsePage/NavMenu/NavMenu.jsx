import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './NavMenu.module.css';

const NavMenu = () => {
    return (
        <>
            <nav>
                <Link to="#" >
                    <div className={styles.Nav__button} >
                        Продается
                    </div>
                </Link>
                <Link to="#" >
                    <div className={styles.Nav__button} >
                        Коллекция
                    </div>
                </Link>
                <Link to="#" >
                    <div className={styles.Nav__button} >
                        Отслеживаемое
                    </div>
                </Link>
                <Link to="#" >
                    <div className={styles.Nav__button} >
                        Подписчики
                    </div>
                </Link>
                <Link to="#" >
                    <div className={styles.Nav__button} >
                        Подписки
                    </div>
                </Link>
            </nav>
        </>
     )
}

NavMenu.propTypes = {
    optional: PropTypes.string
}

export default NavMenu;