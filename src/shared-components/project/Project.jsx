import React from 'react';
import './Project.css';

function Project({ heading, img, description }) {
	return (
		<div className='grid'>
			{/* <h1 className='font-bold text-xl'>Project Heading</h1>
			<p className='text-sm'>Description</p> */}
			<figure className='effect-apollo'>
				<img src='/logo.jpg' alt='logo' />
				<figcaption>
					<h2>
						Project <span>Name</span>
					</h2>
					<p>Description will go here</p>
					<a href='src#'>View more</a>
				</figcaption>
			</figure>
		</div>
	);
}

export default Project;
