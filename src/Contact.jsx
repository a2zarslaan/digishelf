import React from 'react';

function Contact() {
	return (
		<div className='border bg-gray-700 bg-opacity-10 grid grid-cols-3 grid-rows-3 w-full h-[80%] overflow-hidden'>
			<h1 className='font-bold text-6xl row-start-3 flex items-center justify-center'>
				Contact
			</h1>
			<p className='text-lg col-start-3 backdrop-blur-sm pt-5 px-10'>
				As certified graphics engineering experts, we have the knowledge and
				resources to handle projects of any size and complexity, even with tight
				deadlines. We understand that
				{/* every project is unique, and we work closely with our clients to ensure that their vision is brought to life in a way that is both visually stunning and technically sound.
        We make our clients’ needs our priority. */}
			</p>
			<p className='text-lg col-start-3 row-start-2 backdrop-blur-sm px-10'>
				<div>
					<span className='font-bold'>NDA contracts: </span>We are open to
					signing non-disclosure agreements (NDAs) to protect your intellectual
					property.
				</div>
				<div>
					<span className='font-bold'>Demos: </span> If you are unsure about
					starting a major project right away, we are happy to provide a quick
					demo to give you a better understanding of our capabilities.
				</div>
				{/* <div>
          <span className="font-bold">Project estimates: </span>If you do not have detailed terms of reference yet, we can provide a rough estimate of the project to give you an
          idea of the scope and cost.
        </div> */}
			</p>
			<div className='flex col-start-3 row-start-3 items-center justify-center  backdrop-blur-sm pb-5 px-10'>
				<svg
					viewBox='0 0 1024 1024'
					fill='currentColor'
					height='2em'
					width='2em'
				>
					<path d='M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 01-47.9 47.9z' />
				</svg>
				<svg
					viewBox='0 0 1024 1024'
					fill='currentColor'
					height='2em'
					width='2em'
				>
					<path d='M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1168.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z' />
				</svg>
				<svg viewBox='0 0 24 24' fill='currentColor' height='2em' width='2em'>
					<path d='M20 8l-8 5-8-5V6l8 5 8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2z' />
				</svg>
			</div>
		</div>
	);
}

export default Contact;
