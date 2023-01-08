import { NavLink, Link } from 'react-router-dom';

export default function Navbar() {
	let activeStyle = {
		backgroundColor: 'white',
		color: 'black',
		fontWeight: 'bold',
	};
	return (
		<>
			<div className=' md:px-10 py-2 md:py-5 flex flex-col lg:flex-row items-center justify-between font-normal h-[10%] w-100'>
				<div className='flex'>
					<Link
						to='/'
						className='font-extrabold justify-center text-xl xl:text-2xl 2xl:text-4xl'
					>
						<span className='hover:font-extrabold hover:shadow-lg hover:shadow-white'>
							DigiShelf
						</span>
					</Link>
				</div>
				<div className='flex gap-4 xl:gap-12 justify-between xl:text-lg 2xl:text-2xl'>
					<NavLink
						to='/'
						className='px-2 py-1 lg:w-20 2xl:w-28 flex justify-center hover:text-black hover:bg-white hover:font-bold'
						// style={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						Home
					</NavLink>
					<NavLink
						to='/about'
						className='px-2 py-1 lg:w-20 2xl:w-28 flex justify-center hover:text-black hover:bg-white hover:font-bold'
						style={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						About
					</NavLink>
					<NavLink
						to='/projects'
						className='px-2 py-1 lg:w-20 2xl:w-28 flex justify-center hover:text-black hover:bg-white hover:font-bold'
						style={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						Projects
					</NavLink>
					<NavLink
						to='/contact'
						className='px-2 py-1 lg:w-20 2xl:w-28 flex justify-center hover:text-black hover:bg-white hover:font-bold'
						style={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						Contact
					</NavLink>
				</div>
			</div>
		</>
	);
}
