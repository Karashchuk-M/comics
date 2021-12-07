import PropTypes from 'prop-types';
import styles from './TopBackground.module.css';

const TopBackground = () => {
    return (
        <>
                <div className={styles.Wrapper__background} >

                </div>
        </>
     )
}

TopBackground.propTypes = {
    optional: PropTypes.string
}

export default TopBackground;