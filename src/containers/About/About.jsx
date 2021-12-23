import PropTypes from 'prop-types';
import TopAbout from '@components/About/TopAbout';
import AboutMarcet from '@components/About/AboutMarcet';
import styles from './About.module.css';

const About = () => {
    return (
        <>
            <div className="container">
                <TopAbout />
            </div>
            <div className="container">
                <AboutMarcet />
            </div>
        </>
     )
}

About.propTypes = {
   // optional: PropTypes.string
}

export default About;