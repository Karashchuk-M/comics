
import "./index.css";
import { Collapse } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";

import PropTypes from 'prop-types';
import styles from './AboutMarcet.module.css';
import "antd/dist/antd.css";
const AboutMarcet = () => {
    const { Panel } = Collapse;

    const text = `
    Стандарт ERC-721 не только позволяет создавать NFT, но также включает возможность их уничтожения, то есть сжигания токена.

    `;

    return (
        <>

            <h1 className={styles.Trading__title} >Торговая площадка</h1>
            <div className={styles.AboutMarcet__items}>
                <Collapse
                    accordion
                    bordered={false}
                    expandIconPosition="right"
                    expandIcon={({ isActive }) => (
                        <CaretDownOutlined
                            className="DownOutlined"
                            rotate={isActive ? 90 : 0}
                        />
                    )}
                    className="site-collapse-custom-collapse"
                >
                    <Panel
                        header="NFT? Токены ERC-721?"
                        key="1"
                        className="site-collapse-custom-panel"
                    >
                        <p>{text}</p>
                    </Panel>
                    <Panel
                        header="Могу ли я пожаловатся на произведение искусства или коллекционный предмет?"
                        key="2"
                        className="site-collapse-custom-panel"
                    >
                        <p>{text}</p>
                    </Panel>
                    <Panel
                        header="Что означает сжечь токен?"
                        key="3"
                        className="site-collapse-custom-panel"
                    >
                        <p>{text}</p>
                    </Panel>
                    <Panel
                        header="Хочу предложить дополнительные возможности"
                        key="4"
                        className="site-collapse-custom-panel"
                    >
                        <p>{text}</p>
                    </Panel>
                    <Panel
                        header="Что такое система управления Rarible? как это работает?"
                        key="5"
                        className="site-collapse-custom-panel"
                    >
                        <p>{text}</p>
                    </Panel>
                    <Panel
                        header="Прошло какое то время а я не прошел проверку почему?"
                        key="6"
                        className="site-collapse-custom-panel"
                    >
                        <p>{text}</p>
                    </Panel>
                </Collapse>

            </div>
        </>
    )
}

AboutMarcet.propTypes = {
    //optional: PropTypes.string
}

export default AboutMarcet;