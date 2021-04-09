/* eslint-disable react/display-name */
import React from 'react';
import styled from 'styled-components';
import About from './pages/about/index';
import Faq from './pages/faq/index';
import Contacts from './pages/contact/index';
import Gallery from './pages/gallery/index';
import Products from './modules/products/index';
import Box from './modules/box/index';
import Auth from './modules/auth/index';
import Summary from './modules/box/summary/index';
import Order from './modules/box/order/index';

const Placeholder = styled.div`
	align-items: center;
	height: 100%;
	justify-content: center;
	margin-left: 100px;
	margin-top: 50px;
	position: fixed;
	width: 100%;
`;

const ComponentPlaceholder = ({ label }: { label: string }) => (
	<Placeholder>
		<h1>{`ready for ${label} component and functionality`}</h1>
	</Placeholder>
);
const routes = [
	{
		path: '/About',
		component: About,
		routeName: 'About',
	},
	{
		path: '/Faq',
		component: Faq,
		routeName: 'Faq',
	},
	{
		path: '/Gallery',
		component: Gallery,
		routeName: 'Gallery',
	},
	{
		path: '/Contacts',
		component: Contacts,
		routeName: 'Contacts',
	},
	{
		path: '/Box',
		component: Box,
		routeName: 'Box',
	},
	{
		path: '/Summary',
		component: Summary,
		routeName: 'Summary',
	},
	{
		path: '/Order',
		component: Order,
		routeName: 'Order',
	},
	{
		path: '/Auth',
		component: Auth,
		routeName: 'Auth',
	},
	{
		path: '/:category_id',
		component: Products,
		routeName: 'Category',
	},

	{
		path: '/OtherComponents',
		component: () => <ComponentPlaceholder label='OtherComponents' />,
		routeName: 'OtherComponents',
	},
];

export { routes as default };
