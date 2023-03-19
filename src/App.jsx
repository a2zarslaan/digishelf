import Navbar from './shared-components/Navbar.jsx';
import Footer from './shared-components/Footer.jsx';
import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import CanvasComponent from "./shared-components/CanvasComponent.jsx";

const titles = {
	'/': 'Welcome to DigiShelf',
	'/about': 'About',
	'/projects': 'Projects',
	'/artworks': 'Artworks',
	'/contact': 'Contact',
};

export default function App() {
	const location = useLocation();
	useEffect(() => {
		document.title = titles[location.pathname] ?? 'DigiShelf';
	}, [location]);

	return (
		<>
			<CanvasComponent />
			<div className='absolute top-0 left-0 w-full h-full min-h-screen flex flex-col justify-between'>
				<Navbar />
				{/* <Header /> */}
				<Outlet />
				<Footer />
			</div>
		</>
	);
}

