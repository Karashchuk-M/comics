import DateComics from "@server/comics.json";
import PropTypes from 'prop-types';
import Chart from "@components/Comics/Chart/Chart";
import imgAutor from '@img/icon-1.png';

import styles from './Comics.module.css';

const Comics = () => {

    return (
    <>
        <div className={styles.Comics__container}>

            <div className={styles.Comics__items}>
                {DateComics.map(({ id, title, img, priceETN, USD, nickName, thema, registry }) =>
                    <div className={styles.Comics__item} key={id}>
                        <div className={styles.Comics__images}>
                            <img className={styles.Comics__img} src={img} alt={title} />
                        </div>

                        <div className={styles.Comics__info}>
                                <h1 className={styles.Comics__title}>{ title }</h1>
                                <p className={styles.Comics__autor}>
                                    Автор: { nickName } <div className={styles.User__counter}>39 человек отслеживает</div>
                                    
                                </p> 
                                <div className={styles.Comics__chart}>
                                    <p className={styles.price}>{priceETN} ETN
                                        <span className={styles.price__usd}>{USD} USD
                                        </span>
                                    </p>
                                    <button className={styles.comics__button}>Купить сейчас</button>
                                    <div className={styles.Comics__chart_lines}>
                                        <Chart />
                                    </div>
    
                                    
                                </div>

                                <div className={styles.comics__extra_info}>
                                    <p>Тема: Комиксы</p>
                                    <p>
                                            Зарегистрировал
                                    <span className={styles.comics__username}><img src={imgAutor} alt="icon"/> Visage 002</span>
                                    </p>
                                </div>
                                <div className={styles.comics__lot}>
              <div className={styles.comics__lot_info}>Информация о лоте</div>
              <ul>
                <li>Номер в реестре <span> CGC:1557003001</span></li>
                <li>Название: <span> Incredible Hulk #181</span></li>
                <li>Вселенная: <span> Marvel Comics</span></li>
                <li>Создатели: <span> LEN WEIN story</span></li>
              </ul>
              <div className={styles.comics__lot_info}>Подписан:</div>
              <div className={styles.comics__sub}>
                <p>LEN WEIN 6/24/13</p>
                <p>STAN LEE 6/29/13</p>
              </div>
              <div className={styles.comics__lot_info}>Ключи:</div>
              <div className={styles.comics__keys}>
                <p>Первое появление Расомахи</p>
              </div>
            </div>
                        </div>
                    </div>

                )}
            </div>
        </div>

    </>
    )
}
Comics.propTypes = {
    id: PropTypes.number,

}

export default Comics;