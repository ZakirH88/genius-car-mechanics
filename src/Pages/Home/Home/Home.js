import React from 'react';
import Bannner from '../Banner/Bannner';
import Experts from '../Experts/Experts';
import Services from '../Services/Services';


const Home = () => {
	return (
		<div>
			<Bannner></Bannner>
			<Services></Services>
			<Experts></Experts>
		</div>
	);
};

export default Home;