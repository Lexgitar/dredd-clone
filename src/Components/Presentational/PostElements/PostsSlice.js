import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const postsUrl = 'https://www.reddit.com/r/gaming.json';

//const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts/?_limit=10';

const initialState = {
    posts: [],
    status: 'idle',
    error:null,
   
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async ()=>{
    const response = await axios.get(postsUrl)
    return response.data
})


const PostsSlice = createSlice({
    name:'posts',
    initialState,
    reducers:{
        toggleUp : (state)=>{
              state.rating+=1;
        },
        toggleDown:(arg)=>{
            arg-=1 ;
       },
    },
    extraReducers(builder){
        builder
        .addCase(fetchPosts.pending, (state, action)=>{
            state.status = 'loading'
        })
        .addCase(fetchPosts.fulfilled, (state,action)=>{
            state.status = 'succeeded'
            state.posts = action.payload
            
        })
        .addCase(fetchPosts.rejected, (state,action)=>{
            state.status = 'rejected'
            state.error = action.error.message
        })
    }
})

export default PostsSlice.reducer
export const selectAllPosts = (state)=> state.posts.posts.data
export const selectStatus = (state)=> state.posts.status
export const selectError = (state)=> state.posts.error
export const {toggleUp, toggleDown} = PostsSlice.actions


