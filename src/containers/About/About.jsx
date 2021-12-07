import PropTypes from 'prop-types';
import TopAbout from '@components/About/TopAbout';
import styles from './About.module.css';

const About = () => {
    return (
        <>
            <div className="container">
                <TopAbout />
            </div>
        </>
     )
}

About.propTypes = {
   // optional: PropTypes.string
}

export default About;