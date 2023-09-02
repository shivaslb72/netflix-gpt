import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store=>store.movies)
  return (
    movies.nowPlayingMovies&&(
      <div className=' bg-black'>
      <div className='-mt-60  pl-12 relative z-20'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Toprated Movies"} movies={movies.topratedMovies} />
      <MovieList title={"Papular"} movies={movies.papularMovies} />
      <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
      <MovieList title={"Hrror"} movies={movies.nowPlayingMovies} />
      </div>

    </div>
    )
   
  )
}

export default SecondaryContainer