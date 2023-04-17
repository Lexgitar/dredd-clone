import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    trending:{
        popular : null,
        music: 'music',
        celebs: 'celebs'
    },
    status: 'idle',
    error: null,
}


const popular = 'popular';
const music = 'music';
const celebs = 'celebrities';

const apiBase=(arg)=>{
   //return `https://www.reddit.com/r/${arg}.json`}
   return `https://www.reddit.com/r/${arg}.json`}

   export const fetchPopular = createAsyncThunk('trending/fetchPopular', async()=>{
        const response = await axios.get(apiBase(popular))
        return response.data
   })
   export const fetchMusic = createAsyncThunk('trending/fetchMusic', async()=>{
    const response = await axios.get(apiBase(music))
    return response.data
   })
   export const fetchCelebs = createAsyncThunk('trending/fetchCelebs', async()=>{
    const response = await axios.get(apiBase(celebs))
    return response.data
   })


export const TrendingSlice = createSlice({
    name: 'trending',
    initialState,
    reducers:{},
    extraReducers(builder){
        builder
        .addCase(fetchPopular.pending, (state, action)=>{
            state.status = 'loading'
        })
        .addCase(fetchPopular.fulfilled, (state,action)=>{
            state.status = 'succeeded'
            state.trending.popular = action.payload.data.children
        })
        .addCase(fetchPopular.rejected, (state,action)=>{
            state.status = 'rejected'
            state.error = action.error.message
        })
        .addCase(fetchMusic.pending, (state, action)=>{
            state.status = 'loading'
        })
        .addCase(fetchMusic.fulfilled, (state,action)=>{
            state.status = 'succeeded'
            state.trending.music = action.payload.data.children
        })
        .addCase(fetchMusic.rejected, (state,action)=>{
            state.status = 'rejected'
            state.error = action.error.message
        })
        .addCase(fetchCelebs.pending, (state, action)=>{
            state.status = 'loading'
        })
        .addCase(fetchCelebs.fulfilled, (state,action)=>{
            state.status = 'succeeded-c'
            state.trending.celebs = action.payload.data.children
        })
        .addCase(fetchCelebs.rejected, (state,action)=>{
            state.status = 'rejected'
            state.error = action.error.message
        })
    }
})

export default TrendingSlice.reducer
export const selectTrending = (state)=> state.trending.trending
export const selectPopular = (state)=> state.trending.trending.popular
export const selectMusic = (state)=> state.trending.trending.music
export const selectCelebs = (state)=> state.trending.trending.celebs
export const selectTrendStatus = (state)=> state.trending.status