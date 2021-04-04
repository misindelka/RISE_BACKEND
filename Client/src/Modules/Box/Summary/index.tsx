/* eslint-disable import/namespace */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { countFinalPrice } from '../../../Redux/Actions/BoxActions';
import { IProductTypes } from '../../../Types/types';
import BoxBar from '../BoxBar';
import SummaryTable from './SummaryTable';
import { Paper, ContentWrapper, LinkTo } from '../../../Styles/Components';
import { ShopWrapper, NavContainer } from '../../Styles/Components';

interface IProps {
	finalPrice: number;
	removeProductFromBox: (p: IProductTypes) => void;
	increase: (p: IProductTypes) => void;
	decrease: (p: IProductTypes) => void;
}

const BoxSummary: React.FC<IProps> = () => {
	const dispatch = useDispatch();
	const productsInBox = useSelector(state => state.productsInBox.data);
	const finalPrice = useSelector<number>(
		state => state.productsInBox.finalPrice
	);

	const { t } = useTranslation();
	useEffect(() => {
		dispatch(countFinalPrice());
	});

	return (
		<ShopWrapper>
			<BoxBar />
			<ContentWrapper>
				<Paper>
					<SummaryTable productsInBox={productsInBox} finalPrice={finalPrice} />
					<NavContainer>
						<LinkTo to="/Box">
							<h4>{t('boxBackToBoxButton')}</h4>
						</LinkTo>
						<LinkTo to="/Order">
							<h4>{t('boxContinueToOrderButton')}</h4>
						</LinkTo>
					</NavContainer>
				</Paper>
			</ContentWrapper>
		</ShopWrapper>
	);
};

export default BoxSummary;
