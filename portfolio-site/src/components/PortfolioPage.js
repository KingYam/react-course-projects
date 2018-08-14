import React from 'react';
import {Link} from 'react-router-dom';

const PortfolioPage = () => (
	<div>
		<h1>My Work</h1>
		<p>Check out the following things I've done:</p>
		<ul>
			<li><Link to="/portfolio/1">Item 1</Link></li>
			<li><Link to="/portfolio/11">Item 11</Link></li>
		</ul>
	</div>
);

export default PortfolioPage;