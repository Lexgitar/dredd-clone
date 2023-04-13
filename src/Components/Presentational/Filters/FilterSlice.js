import { createSlice } from "@reduxjs/toolkit";

const initialState={
    category: 'r/popular',
    link: `https://www.reddit.com/r/popular.json?limit=10`
}



export const FilterSlice= createSlice({
    name: 'category',
    initialState,
    reducers:{
        setCategory :(state,action)=>{
            state.category =  action.payload
            state.link = `https://www.reddit.com/${state.category}.json?limit=10`
        }
    }
}) 

export default FilterSlice.reducer
export const {setCategory} = FilterSlice.actions
export const getCategory = (state)=> state.category.category
export const getLink = (state)=> state.category.link