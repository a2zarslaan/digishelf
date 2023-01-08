import { Link } from 'react-router-dom';

export default function Navbar() {
	return (
		<>
			<div className='px-10 py-5 flex flex-col lg:flex-row items-center justify-between font-normal h-[10%] w-100'>
				<div className='flex'>
					<Link
						to='/'
						className='font-extrabold justify-center text-xl xl:text-2xl 2xl:text-4xl'
					>
						DigiShelf
					</Link>
				</div>
				<div className='flex gap-4 xl:gap-12 justify-between xl:text-lg 2xl:text-2xl'>
					<Link
						to='/'
						className='px-2 py-1 lg:w-20 flex justify-center hover:text-black hover:bg-white hover:font-bold'
					>
						Home
					</Link>
					<Link
						to='/about'
						className='px-2 py-1 lg:w-20 flex justify-center hover:text-black hover:bg-white hover:font-bold'
					>
						About
					</Link>
					<Link
						to='/projects'
						className='px-2 py-1 lg:w-20 flex justify-center hover:text-black hover:bg-white hover:font-bold'
					>
						Projects
					</Link>
					<Link
						to='/contact'
						className='px-2 py-1 lg:w-20 flex justify-center hover:text-black hover:bg-white hover:font-bold'
					>
						Contact
					</Link>
				</div>
			</div>
		</>
	);
}
