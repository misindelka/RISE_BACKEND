import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import ShopLink from '../../../Links/shopLink';
import { Paper, ContentContainer, NavContainer } from '../Styles/Components';
import { BoxIsEmptyLabelSk } from '../../../constants/Labels';

const Image = styled.img`
	width: 50vh;
`;

const BoxIsEmpty: React.FC = () => {
	const { t } = useTranslation();
	return (
		<ContentContainer>
			<Paper>
				<ContentContainer>
					<h3>{BoxIsEmptyLabelSk}</h3>
				</ContentContainer>
				<Image src={`${process.env.PUBLIC_URL}/assets/logo-circle.png`} />
				<NavContainer>
					<h4>{t('boxBackToShoppingButton')}</h4>
					<ShopLink />
				</NavContainer>
			</Paper>
		</ContentContainer>
	);
};

export default BoxIsEmpty;
