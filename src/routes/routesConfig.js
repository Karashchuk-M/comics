import MainPage from '@containers/MainPage';
import UserPage from '@containers/UserPage';
import About from '@containers/About';

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
    }
];

export default routesConfig;