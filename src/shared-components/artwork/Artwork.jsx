import React from 'react';

function Artwork({ title, img, description }) {
  return (
    <div className='flex flex-col xl:flex-row xl:justify-between items-center h-[100%]'>
      <h1 className='font-bold xl:text-8xl text-center xl:w-[60%]'>{title?.split('.')[0]}</h1>
      <figure className='xl:w-[40%]'>
        <a href='https://www.instagram.com/digishelfstudios'>
          <img src={img} alt={title?.split('.')[0]} className='bg-cover cursor-pointer transition ease-in-out
            bg-white hover:opacity-90 hover:border-8 hover:-translate-y-1 hover:scale-90 duration-150'/>
        </a>
      </figure>
    </div>
  );
}

export default Artwork;
