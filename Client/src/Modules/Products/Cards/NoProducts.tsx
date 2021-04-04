import React from 'react';
import styled from 'styled-components';
import { Paper, ContentContainer } from '../../Styles/Components';
import { NoProductsInCategorySk } from '../../../constants/Labels';

const Image = styled.img`
	width: 50vh;
`;

const BoxIsEmpty: React.FC = () => (
	<ContentContainer>
		<Paper>
			<ContentContainer>
				<h3>{NoProductsInCategorySk}</h3>
			</ContentContainer>
			<Image src={`${process.env.PUBLIC_URL}/assets/logo-circle.png`} />
		</Paper>
	</ContentContainer>
);

export default BoxIsEmpty;
