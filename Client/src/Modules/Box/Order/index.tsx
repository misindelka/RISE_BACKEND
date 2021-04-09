/* eslint-disable no-unused-vars */
/* eslint-disable import/namespace */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import OrderFrom from './orderForm';
import { countFinalPrice } from '../../../redux/actions/boxActions';
import { addUser } from '../../../redux/actions/usersActions';
import { IUser } from '../../../types/types';
import BoxBar from '../BoxBar';
import { Paper, ContentWrapper } from '../../../styles/components';
import { ShopWrapper } from '../../styles/modulesComponents';

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

	const submitUser = (user) => {
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
