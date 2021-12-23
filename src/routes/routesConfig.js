import MainPage from '@containers/MainPage';
import UserPage from '@containers/UserPage';
import About from '@containers/About';
import Comics from '../containers/Comics/Comics';

const routesConfig = [
    {
        path: '/',
        exact: true,
        component: MainPage
    },
    {
        path: '/user',
        exact: true,
        component: UserPage
    },
    {
        path: '/about',
        exact: true,
        component: About
    },
    {
        path: '/comics',
        exact: true,
        component: Comics
    }
];

export default routesConfig;