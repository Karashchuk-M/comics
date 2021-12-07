
import PropTypes from 'prop-types';
import styles from './UserPage.module.css';
import ProfileTop from '@components/UsePage/ProfileTop';
import NavMenu from '@components/UsePage/NavMenu';
import Gallery from '@components/MainPage/Gallery';

const UserPage = () => {
    
    return (
        <>
            <div className="container">
                <ProfileTop />
            </div>
            <div className="container">
                <NavMenu />
            </div>
            <div className="container">
                <Gallery title='Профиль'/>
            </div>
            
        
        </>
     )
}

UserPage.propTypes = {
    optional: PropTypes.string
}

export default UserPage;