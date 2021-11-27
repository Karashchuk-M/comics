import MainPage from '@containers/MainPage';
import UserPage from '@containers/UserPage';

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
    }
];

export default routesConfig;