import { Link } from 'react-router-dom';

export default function Navbar() {
	return (
		<>
			<div className='px-10 py-5 flex items-center justify-between font-normal h-[10%]'>
				<div>
					<Link to='/' className='font-extrabold text-xl w-20'>
						DigiShelf
					</Link>
				</div>
				<div className='flex gap-12'>
					<Link
						to='/'
						className='px-2 py-1 w-20 flex justify-center hover:text-black hover:bg-white hover:font-bold'
					>
						Home
					</Link>
					<Link
						to='/about'
						className='px-2 py-1 w-20 flex justify-center hover:text-black hover:bg-white hover:font-bold'
					>
						About
					</Link>
					<Link
						to='/projects'
						className='px-2 py-1 w-20 flex justify-center hover:text-black hover:bg-white hover:font-bold'
					>
						Projects
					</Link>
					<Link
						to='/contact'
						className='px-2 py-1 w-20 flex justify-center hover:text-black hover:bg-white hover:font-bold'
					>
						Contact
					</Link>
				</div>
			</div>
		</>
	);
}
