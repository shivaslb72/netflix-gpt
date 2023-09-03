import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPapularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  //memorisation of data
  const popularMovies = useSelector((store) => store.movies.papularMovies);
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addPapularMovies(json.results));
    console.log(json.results);
  };
  useEffect(() => {
    //memorisation of data
    !popularMovies && getPopularMovies();
  }, []);
};

export default usePopularMovies;
