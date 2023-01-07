import React from 'react';
import Project from './Project';

function Projects() {
	return (
		// <div className="absolute top-52 right-32 border border-2 w-80 h-96 flex flex-col items-center font bg-gray-700 bg-opacity-10">
		<div className='border bg-gray-700 bg-opacity-10 grid grid-cols-3 grid-rows-3 w-full h-[80%] overflow-hidden'>
			<h1 className='font-bold text-6xl row-start-3 flex items-center justify-center'>
				Projects
			</h1>
			<div className='row-span-3'></div>
			<div className='text-xl col-start-3 row-span-3 p-10 backdrop-blur-sm overflow-y-auto'>
				<Project />
				<Project />
				<Project />
				<Project />
				<Project />
				<Project />
				<Project />
				<Project />
				<Project />
				<Project />
				<Project />
				<Project />
			</div>
		</div>
	);
}

export default Projects;
