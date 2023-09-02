import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
        papularMovies:null,
        topratedMovies:null,
        upcomingMovies:null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies = action.payload
        },
        addPapularMovies:(state,action) =>{
            state.papularMovies = action.payload
        },
        addTopratedMovies:(state,action)=>{
            state.topratedMovies = action.payload
        },
        addUpcomingMovies:(state,action)=>{
            state.upcomingMovies = action.payload
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo = action.payload
        }
    }
})

export const {addNowPlayingMovies,addTrailerVideo,addPapularMovies,addTopratedMovies,addUpcomingMovies} = movieSlice.actions
export default movieSlice.reducer