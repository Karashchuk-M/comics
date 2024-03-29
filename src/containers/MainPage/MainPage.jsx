import Gallery from '@components/MainPage/Gallery/Gallery';
import TopBlock from '@components/MainPage/TopBlock';
import SliderTop from '@components/MainPage/SliderTop';
import TopCollectors from '@components/MainPage/TopCollectors';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from './MainPage.module.css';

const MainPage = () => {  

    return (
        <>
        
            <div className="container">
                <TopBlock  />
            </div>
 
            <div className="container" >
                <SliderTop />
            </div>
                <TopCollectors />
            <div className="container" >
                <Gallery />

            </div>
            
        </>
     )
}

export default MainPage;  