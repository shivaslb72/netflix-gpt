import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  if(!posterPath)return null
  return (
    <div className='w-36 md:w-48 p-2 m-2'>
        <img src={IMG_CDN_URL + posterPath } alt='movie card'/>
    </div>
  )
}

export default MovieCard