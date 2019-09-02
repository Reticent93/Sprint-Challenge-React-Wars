import React from 'react';
import { H1, H2 } from './StyledComponents';
import { render, cleanup } from 'react-test-renderer';

const Names = ({ name, height, mass }) => {
	console.log('heading', name, height);
	return (
		<React.Fragment>
			<H1>{name}</H1>
			<H2>{height}</H2>
			<H2>{mass}</H2>
		</React.Fragment>
	);
};
export default Names;
