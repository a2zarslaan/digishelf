import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import About from './pages/About.jsx';
import Artworks from './pages/Artworks.jsx';
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import './index.css';


const router = createHashRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/about',
				element: <About />,
			},
			// {
			// 	path: '/projects',
			// 	element: <Projects />,
			// },
			{
				path: '/artworks',
				element: <Artworks />,
			},
			{
				path: '/contact',
				element: <Contact />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<>
		<RouterProvider router={router} />
	</>
);
