import React from 'react'
import MovieList from './MovieList'
import { addNowPlayingMovies } from '../utils/moviesSlice'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store=>store.movies)
  return (
    <div>
      <MovieList title={"now playing"} movies={movies.nowPlayingMovies} />
    </div>
  )
}

export default SecondaryContainer