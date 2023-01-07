import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
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
			{
				path: '/projects',
				element: <Projects />,
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
