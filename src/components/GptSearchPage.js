import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BG_URL } from "../utils/constants";

const GptSearchPage = () => {
  return (
   <>
    <div className="fixed -z-10">
        <img
          className="h-screen object-cover md:h-screen w-screen"
          src={BG_URL}
          alt="cover"
        />
      </div>
    <div className="">
      
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
   </>
  );
};

export default GptSearchPage;
