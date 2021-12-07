import Collectors from "@server/topCollectors.json";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import styles from './TopCollectors.module.css';

const TopCollectors = () => (
    <>
        <div className={styles.TopCollectors__container}>
            {<h1 className={styles.TopCollectors__title}>Топовые <br /> коллекционеры</h1>}
            <div className={styles.TopCollectors__items}>
                {Collectors.map(({ id, name, avatar, price }) =>
                    <div className={styles.TopCollectors__item} key={id}>
                        <Link to="#">
                            <div className={styles.Collector__info}>
                                <p className={styles.TopCollectors__id}>
                                    {id}
                                </p>
                                <p className={styles.TopCollectors__name}>
                                    {name}
                                </p>

                                <p className={styles.price}>{price} ETN
                                </p>

                            </div>
                            <img className={styles.avatar} src={avatar} alt={name} />

                        </Link>
                    </div>

                )}
            </div>
        </div>

    </>
)

TopCollectors.propTypes = {
    optional: PropTypes.string
}

export default TopCollectors;