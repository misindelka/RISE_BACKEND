import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import Footer from './Footer';
import GlobalStyle from './Styles/GlobalStyle';
import routes from './router';

import Header from './Header/index';
import { getProducts } from './Redux/Actions/ProductsActions';
import Home from './Pages/Home';

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
					<Route key="Home" exact path="/" component={Home} />
					{routes.map(route => (
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
