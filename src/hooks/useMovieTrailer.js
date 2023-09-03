import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieID) => {
  const dispatch = useDispatch();
  //memorisation of data
  const movieTrailer = useSelector((store) => store.movies.trailerVideo);
  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${615656}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();

    const filterData = json.results.filter((video) => video.type == "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];

    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    //memorisation of data
    !movieTrailer && getMovieVideos();
  }, []);
};

export default useMovieTrailer;
