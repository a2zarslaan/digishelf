import React from 'react';

function About() {
	return (
		// <div className="absolute top-52 right-32 border border-2 w-80 h-96 flex flex-col items-center font bg-gray-700 bg-opacity-10">
		<div className='border bg-gray-700 bg-opacity-10  xl:grid xl:grid-cols-3 xl:grid-rows-3 w-full h-[80%]'>
			<h1 className='font-bold text-2xl pt-5 xl:text-6xl xl:row-start-3 flex items-center justify-center'>
				About
			</h1>
			<div className='row-span-3'></div>
			<p className='xl:text-xl xl:col-start-3 xl:row-span-3 p-5 xl:p-10 xl:backdrop-blur-sm'>
				Welcome to Digishelf Studios, a leading creative 3D development agency.
				As co-founders and Art Directors with years of experience in 3D
				development and Research, we have a deep understanding of the 3D
				industry and a passion for pushing the boundaries of what is possible
				with this medium. Our team of over 50 experienced professionals and an
				extensive network of proven freelancers are dedicated to delivering
				high-quality solutions that meet the unique needs of our clients.
			</p>
		</div>
	);
}

export default About;
