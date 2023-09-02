import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import useTopratedMovies from '../hooks/useTopratedMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'


const Browse = () => {
  useNowPlayingMovies()
  usePopularMovies()
  useTopratedMovies()
  useUpcomingMovies()
  
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse
