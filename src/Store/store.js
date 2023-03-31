import { configureStore } from "@reduxjs/toolkit";
import PostsReducer from '../Components/Presentational/PostElements/PostsSlice'
import PostTileReducer from "../Components/Presentational/PostElements/PostTileSlice";



export const store = configureStore({
    reducer :{
        posts: PostsReducer,
        tiles: PostTileReducer
    }
})