/* eslint-disable no-unused-vars */
/* eslint-disable import/namespace */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import OrderFrom from './OrderForm';
import { countFinalPrice } from '../../../Redux/Actions/BoxActions';
import { addUser } from '../../../Redux/Actions/UsersActions';
import { IUser } from '../../../Types/types';
import BoxBar from '../BoxBar';
import { Paper, ContentWrapper } from '../../../Styles/Components';
import { ShopWrapper } from '../../Styles/Components';

interface IProps {
	user: IUser;
	FinalPrice: number;
	submitUser: (user: IUser) => void;
}

const Order: React.FC<IProps> = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(countFinalPrice());
	});

	const submitUser = user => {
		dispatch(addUser(user));
		console.log(user, 'disp ORDER component');
	};

	return (
		<ShopWrapper>
			<BoxBar />
			<ContentWrapper>
				<Paper>
					<OrderFrom submitUser={submitUser} />
				</Paper>
			</ContentWrapper>
		</ShopWrapper>
	);
};

export default Order;
