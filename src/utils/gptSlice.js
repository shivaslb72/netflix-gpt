import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false
    },
    reducers:{
        toggleGptSerchView:(state,action)=>{
            state.showGptSearch = !state.showGptSearch
        }
    }
})
export const {toggleGptSerchView} = gptSlice.actions
export default gptSlice.reducer