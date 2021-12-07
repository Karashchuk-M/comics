import { Link } from 'react-router-dom';
import vk from './img/vk.svg';
import viber from './img/viber.svg';
import instagram from './img/instagram.svg';
import PropTypes from 'prop-types';
import styles from './ProfileTop.module.css';

const ProfileTop = ({nickName='Aruzgard43@',
                    avatar="https://i.ibb.co/N1BjnWM/icon-11.png"
                    }) => {
    return (
        <>
            <div className={styles.User__info}>
                <div className={styles.User__profile}>
                   <img src={avatar} alt={nickName} className={styles.Profile__avatar} />
                   <div className={styles.Profile}>
                   <h1 className={styles.Profile__name} >Дмитрий Ворекс</h1>
                    <Link className={styles.Profile__money}>Neeth кошелек: <span>{nickName}</span></Link>
                    <p className={styles.Profile__social}>Социальные сети
                    <Link className={styles.vk} to="#"><img src={ vk } alt="social" /></Link>
                    <Link className={styles.viber} to="#"><img src={ viber } alt="social" /></Link>
                    <Link className={styles.instagram} to="#"><img src={ instagram } alt="social" /></Link>
                     </p>
                    <Link className={styles.Profile__subscribe} to="#">Подписаться</Link>
                    </div>
                </div>
            </div>
        </>
     )
}

ProfileTop.propTypes = {
    nickName: PropTypes.string,
    avatar: PropTypes.string
}

export default ProfileTop;