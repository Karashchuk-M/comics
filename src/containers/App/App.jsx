import { BrowserRouter, Switch, Route } from 'react-router-dom';
import routesConfig from '@routes/routesConfig';

import styles from './App.module.css';
import NavBar from '@components/NavBar';


const App = () => {
	return (
		<>
			<BrowserRouter>
				<div className={styles.wrapper}>
					<NavBar />


					<Switch>
						{routesConfig.map((route, index) => (
							<Route
								key={index}
								path={route.path}
								exact={route.exact}
								component={route.component}
							/>
						))}
					</Switch>
				</div>
			</BrowserRouter>
		</>
	)
}

export default App;