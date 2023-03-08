import Artwork from '../shared-components/artwork/Artwork.jsx';
import axios from 'axios'
import React, { useEffect, useState, useRef } from 'react'

function Artworks() {

  const [feeds, setFeedsData] = useState([])
  // //use useRef to store the latest value of the prop without firing the effect
  // const tokenProp = useRef(token);
  // tokenProp.current = token;

  useEffect(() => {
    // this is to avoid memory leaks
    const abortController = new AbortController();

    async function fetchInstagramPost () {
      try{
        axios
          .get(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&limit=50&access_token=${import.meta.env.VITE_INSTA_ACCESS_TOKEN}`)
          .then((resp) => {
            setFeedsData(resp.data.data)
          })
      } catch (err) {
        console.log('error', err)
      }
    }

    // manually call the fecth function
    fetchInstagramPost();

    return () => {
      // cancel pending fetch request on component unmount
      abortController.abort();
    };
  }, [10])

  return (
    // <div className="absolute top-52 right-32 border border-2 w-80 h-96 flex flex-col items-center font bg-gray-700 bg-opacity-10">
    <div className='border bg-gray-700 bg-opacity-40 xl:bg-opacity-20 xl:grid xl:grid-cols-3 xl:grid-rows-3 w-full h-[80%] overflow-y-auto xl:overflow-hidden'>
      {/*<h1 className='font-bold text-2xl pt-5 xl:text-6xl xl:row-start-3 flex items-center justify-center'>*/}
      {/*  Artworks*/}
      {/*</h1>*/}
      <div className='xl:overflow-y-auto xl:text-xl xl:col-start-1 xl:col-end-4 xl:row-span-3 p-5 xl:p-10'>
        {feeds.map((feed) => {
          if (feed.media_type !== 'IMAGE') return
          return <Artwork key={feed.id} img={feed.media_url} description={feed.caption} title={feed.caption}/>
        })}
      </div>
    </div>
  );
}

export default Artworks;
