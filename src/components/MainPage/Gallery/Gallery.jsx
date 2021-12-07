import GalleryDate from '@server/gallery.json';
import { Link } from 'react-router-dom';
import more from '@img/more.svg';
import like from '@img/like.svg';
import PropTypes from 'prop-types';
import styles from './Gallery.module.css';

const Gallery = ({title='Галерея'}) => {
    return (
        <> 
               <h1 className={styles.Gallery__h1}>{title}</h1>
                <div className={styles.Gallery__container}>
                {GalleryDate.map(({ id, title, img, price }) => 
                    <div className={styles.Gallery__items} key={id}>
                      <Link  to="#">
                       <img className={styles.comics__photo} src={img} alt={title} />
                       <div className={styles.Gallery__info} > 
                            <p className={styles.Gallery__title}> 
                                { title }
                                <img className={styles.More__img} src={more} alt="more" />
                            </p>
                            
                            <p className={styles.price}>{ price } ETN
                                <span className={styles.Galleri__1of1} >1 of 1</span>
                            </p>
                            <p className={styles.Button__endLike}>
                                <button className={styles.Gallery__button }>Приобрести</button>
                                <img className={styles.Like__img} src={ like } alt="more" />
                            </p>
                       </div>
                       </Link>
                    </div>
                    
                )}
                </div>               
        </>
     )
}

Gallery.propTypes = {
    GalleryDate: PropTypes.array,
    name: PropTypes.string,
    title: PropTypes.string
}

export default Gallery;