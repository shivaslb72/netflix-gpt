import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black aspect-video'>
        <h1 className='text-2xl md:text-6xl font-bold'>{title}</h1>
        <p className='hidden md:inline-block py-6 text-lg w-1/4'>{overview}</p>
        <div className='my-4 md:m-0'>
            <button className='bg-white py-1 md:py-4 px-3 md:px-12 text-xg text-black  rounded-lg hover:bg-opacity-80 duration-300' >Play</button> 
            <button className='hidden md:inline-block bg-white p-4 px-12 text-xg text-black  rounded-lg hover:bg-opacity-80 duration-300 mx-2' >More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle