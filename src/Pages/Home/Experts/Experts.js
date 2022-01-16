import React from 'react';
import './Experts.css'

import mechanic1 from '../../../images/mechanic/machanic-1.png'
import mechanic2 from '../../../images/mechanic/machanic-2.png'
import mechanic3 from '../../../images/mechanic/machanic-3.png'
import mechanic4 from '../../../images/mechanic/machanic-4.png'
import mechanic5 from '../../../images/mechanic/machanic-5.png'
import mechanic6 from '../../../images/mechanic/senior-machanic.png'
import Expert from '../Expert/Expert';

const experts = [
	{
		img : mechanic1,
		name : 'Andrew Smith',
		expertize : 'Engine Expert'
	},
	{
		img : mechanic2,
		name : 'Klinton Smith',
		expertize : 'Cooling Expert'
	},
	{
		img : mechanic3,
		name : 'Harry Smith',
		expertize : 'Polish Expert'
	},
	{
		img : mechanic4,
		name : 'Hossain Khan',
		expertize : 'Alrounder Expert'
	},
	{
		img : mechanic5,
		name : 'Merry Smith',
		expertize : 'Body Expert'
	},
	{
		img : mechanic6,
		name : 'Robin Smith',
		expertize : 'Alrounder Expert'
	}
]

const Experts = () => {
	
	return (
		<div id='experts' className='container'>
			<h2 className='text-primary mt-5'>Our Experts</h2>

			<div className='expert-container'>
				{
					experts.map(expert => <Expert
						key={expert.name}
						expert = {expert}

					></Expert>)
				}
			</div>
		</div>
	);
};

export default Experts;