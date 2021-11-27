import PropTypes from 'prop-types';
import styles from './ComicsList.module.css';

const ComicsList = ({ comics }) => {
    return (
        <ul className={styles.gallery__body}>
            {comics.map(({ id, name, img }) =>
                <li className={styles.gallery__item} key={id}>
                    <img className={styles.comics__photo} src={img} alt={name} />
                    <p>{name}</p>
                </li>
            )}
        </ul>
     )
}

ComicsList.propTypes = {
    comics: PropTypes.array
}

export default ComicsList;