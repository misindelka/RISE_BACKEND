import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import Footer from './footer';
import GlobalStyle from './styles/globalStyle';
import routes from './router';

import Header from './header/index';
import { getProducts } from './redux/actions/productsActions';
import Home from './pages/home';

const Main = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProducts());
	}, []);

	return (
		<div>
			<Router>
				<Header />
				<Switch>
					<Route key='Home' exact path='/' component={Home} />
					{routes.map((route) => (
						<Route
							key={route.path}
							path={route.path}
							component={route.component}
						/>
					))}
				</Switch>
				<Footer />
				<GlobalStyle />
			</Router>
		</div>
	);
};

export default Main;
