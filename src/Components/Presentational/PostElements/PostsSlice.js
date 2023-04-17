import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";


//const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts/?_limit=10';

const initialState = {
    posts: [],
    status: 'idle',
    error:null,
    
    
   
}
//import link


const postsUrl = 'https://www.reddit.com/r/popular.json';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', 
    async (arg)=>{
    if (arg) {const response = await axios.get(arg)
     return response.data  
     } else {const response = await axios.get(postsUrl)
        return response.data}
    
}) 


export const PostsSlice = createSlice({
    name:'posts',
    initialState,
    reducers:{
        filterByHot: (state) =>{
            state.posts = state.posts.slice().sort((a,b)=> a.data.upvote_ratio < b.data.upvote_ratio)
        },
        filterByNew: (state) =>{
            state.posts = state.posts.slice().sort((a,b)=> a.data.created < b.data.created)
        },
        filterByTop: (state) =>{
            state.posts = state.posts.sort((a,b)=> a.data.ups < b.data.ups)
        },
    },
    extraReducers(builder){
        builder
        .addCase(fetchPosts.pending, (state, action)=>{
            state.status = 'loading'
        })
        .addCase(fetchPosts.fulfilled, (state,action)=>{
            state.status = 'succeeded'
            state.posts = action.payload.data.children
            //state.posts = action.payload.data.children.slice().sort((a,b)=> a.data.created < b.data.created)
            
        })
        .addCase(fetchPosts.rejected, (state,action)=>{
            state.status = 'rejected'
            state.error = action.error.message
        })
    }
})

export default PostsSlice.reducer
export const selectAllPosts = (state)=> state.posts.posts
export const selectStatus = (state)=> state.posts.status
export const selectError = (state)=> state.posts.error
export const { filterByHot, filterByNew, filterByTop} = PostsSlice.actions






