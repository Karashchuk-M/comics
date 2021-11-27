import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from './InfoSearch.module.css';

const InfoSearch = () => {
    const [inputSearchValue, setInputSearchValue] = useState('');
    
    const handleInputChange = (event) => {
        console.log(event.target.value);
        setInputSearchValue(event.target.value);
    }
    return (
        <>
                        
            <div className={styles.info__search}>
                <input className={styles.info__input}
                type="text"
                value={inputSearchValue}
                onChange={handleInputChange}
                placeholder="Поиск по номеру в системе CGC"
                 />
                <button className={styles.info__button}>Найти</button>
            </div>                                
                            
        </>
     )
}

InfoSearch.propTypes = {
    // optional: PropTypes.string
}

export default InfoSearch;