import React from 'react';

const PortfolioItemPage = (props) => (
		<div>
			This is my portfolio item, id: {props.match.params.id}
		</div>
);

export default PortfolioItemPage;