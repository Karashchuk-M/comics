//import { useState } from 'react';
import InfoSearch from '../InfoSearch/InfoSearch';
import PropTypes from 'prop-types';
import styles from './TopBlock.module.css';

const TopBlock = () => {
    
    return (
        <>
            <div className={styles.info__wrapper} >
                
                    <div className="info" >
                        <div className={styles.info__text}>
                            <p className={styles.info__sell}>Продавайте</p>
                            <h1 className={styles.info__title}>Новое искусство по новому</h1>
                            <InfoSearch />
                        </div>
                    </div>
            </div>
        </>
     )
}

TopBlock.propTypes = {
    //optional: PropTypes.string
}

export default TopBlock;