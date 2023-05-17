// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// //import axios from "axios";


// const initialState={
//     mock: null,
//     status:'idle',
//     error:null
// }
// //const api = 'https://cors-anywhere.herokuapp.com/https://api.reddit.com/r/pics/comments/12sv7p3.json'
// const api = 'https://www.reddit.com/r/DesignPorn/comments/pjedb8.json'
// export const fetchMock = createAsyncThunk('mock/fetchMock',
// async()=>{
    
//     const response = await fetch(api)
//     const json = await response.json()
//     //this here 
//     return json[1].data.children.map((subreddit) => subreddit.data.body)
//     //return response[1].data.children.map((subreddit) => subreddit.data.body)
// })



// const mockSlice= createSlice({
// name:'mock',
// initialState,
// reducers:{

// },
// extraReducers(builder){
//     builder
//     .addCase(fetchMock.pending, (state, action)=>{
//         state.status = 'loading'
//     })
//     .addCase(fetchMock.fulfilled, (state,action)=>{
//         state.status = 'succeeded'
//         state.mock=action.payload
//     })
//     .addCase(fetchMock.rejected, (state,action)=>{
//         state.status = 'rejected'
//         state.error = action.error.message
//     })
// }
// })
// export default mockSlice.reducer
// export const selectMockStatus = (state)=> state.mock.status
// export const selectMock = (state)=> state.mock.mock
// export const selectError = (state)=> state.mock.error