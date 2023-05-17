// import { createSlice, createAsyncThunk, } from "@reduxjs/toolkit";

// //import axios from "axios";

// const initialState = {
//     comments: [],
//     status: 'idle',
//     error: null,
// }

// //const baseUrl = 'https://www.reddit.com'
// //const urlEnd = '.json?limit=10'

// const apiBase=(arg)=>{
   
//     return `https://www.reddit.com${arg}.json`
// }

// export const fetchComments = createAsyncThunk('comments/fetchComments',
// async({permalink,index})=>{
//     //console.log(permalink)
//    if (permalink ){const response = await fetch(apiBase(permalink))
//     //const json = await response.json()
   
//     const json = await response.json()
//     const lode =  json[1].data.children
//     const mappedData = lode.map((comment) =>  comment)
//     let [destr] = mappedData
//     let [...destr2] = lode
//     //this here 
//     return {comments:[...destr2], index: index}
//     //.map((comment) =>  comment.data.body)
   
// }})



// export const CommentsSlice = createSlice({
//     name: 'comments',
//     initialState,
//     reducers:{
//        resetComments:(state, action)=>{
//         state.comments = []
//        }
//     },

//     extraReducers(builder){
//         builder
//         .addCase(fetchComments.pending, (state, action)=>{
//             state.status = 'loading'
//         })
//         .addCase(fetchComments.fulfilled, (state,action)=>{
//             state.status = 'succeeded'
//             state.comments.unshift(action.payload)
              
//         })
//         .addCase(fetchComments.rejected, (state,action)=>{
//             state.status = 'rejected'
//             state.error = action.error.message
            
//         })
//     }
// })

// export default CommentsSlice.reducer
// export const selectComments = (state)=> state.comments.comments
// export const selectStatus = (state)=> state.comments.status
// export const selectErrorMessage = (state)=> state.comments.error

// export const {resetComments} = CommentsSlice.actions

// //export const {addComment} = CommentsSlice.actions