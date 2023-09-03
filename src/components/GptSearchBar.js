import React, { useRef } from "react";
import lang from "../utils/languageConstatns";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openAi";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResults } from "../utils/gptSlice";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch()
  //search movie in TMDB
  const searchMovieTmdb = async(movie)=>{
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1",API_OPTIONS)
    const json = await data.json()
    return json.results
  }
  const langkey = useSelector((store) => store.config.lang);
  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    //make an api call to GPT api to get a movie results
    const gptQuery =
      "Act as a movie recommendation system and suggest some movies for query : " +
      searchText.current.value +
      ". only give me names of 5 movies,comma separed like the exmaple result given ahed. Example result: Gadar,Sholay,KGF,RRR,Golmall";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    console.log(gptResults.choices[0]?.message?.content);
    const gptMovies = gptResults.choices[0]?.message?.content.split(",")
    //for each movies i will search TMDB api
   const promiseArray = gptMovies.map(movie=>searchMovieTmdb(movie))
   //[promise,promise,promise,promise,promise]
   const tmdbResults = await Promise.all(promiseArray)
   console.log(tmdbResults)
   dispatch(addGptMovieResults({movieNames:gptMovies,movieResults:tmdbResults}))

  };
  return (
    <div className="pt-[40%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langkey].gptSearchPlaceHolder}
        />
        <button
          onClick={() => handleGptSearchClick()}
          className="py-2 px-4 m-4 col-span-3 bg-red-700 text-white rounded-lg"
        >
          {lang[langkey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
