import { configureStore } from "@reduxjs/toolkit";
import PostsReducer from '../Components/Presentational/PostElements/PostsSlice'



export const store = configureStore({
    reducer :{
        posts: PostsReducer,
        
    }
})