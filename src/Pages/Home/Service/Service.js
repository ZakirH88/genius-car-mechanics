import React from 'react';
import './Service.css';

const Service = ({service}) => {
	// const {service} = props;
	const {name, price, description, img} = service;

	return (
		<div className='service'>
			
			<img src = {img} alt='' />
			<h2>{name}</h2>
			<h4>Price : {price}</h4>
			<p className='px-3'>{description}</p>
		</div>
	);
};

export default Service;