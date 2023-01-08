import React from 'react';
import Project from './Project';

function Projects() {
	return (
		// <div className="absolute top-52 right-32 border border-2 w-80 h-96 flex flex-col items-center font bg-gray-700 bg-opacity-10">
		<div className='border bg-gray-700 bg-opacity-10  xl:grid xl:grid-cols-3 xl:grid-rows-3 w-full h-[80%] overflow-y-auto xl:overflow-hidden'>
			<h1 className='font-bold text-2xl pt-5 xl:text-6xl xl:row-start-3 flex items-center justify-center'>
				Projects
			</h1>
			<div className='xl:overflow-y-auto xl:text-xl xl:col-start-3 xl:row-span-3 p-5 xl:p-10 xl:backdrop-blur-sm'>
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
