import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../utils/moviesSlice'
import { useEffect } from 'react'


const useNowPlayingMovies = () =>{
    //fetch the data from the TMDB and update the store
    const dispatch = useDispatch()
    const getNowPlayingMovie = async() =>{
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
    const json = await data.json()
    
    dispatch(addNowPlayingMovies(json.results))
    

  }
  useEffect (()=>{
    getNowPlayingMovie()
  },[])
}

export default useNowPlayingMovies