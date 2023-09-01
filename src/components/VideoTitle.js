import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black aspect-video'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview}</p>
        <div>
            <button className='bg-white p-4 px-12 text-xg text-black  rounded-lg hover:bg-opacity-80 duration-300' >Play</button> 
            <button className='bg-white p-4 px-12 text-xg text-black  rounded-lg hover:bg-opacity-80 duration-300 mx-2' >More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle