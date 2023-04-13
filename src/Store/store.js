import { configureStore } from "@reduxjs/toolkit";
import PostsReducer from '../Components/Presentational/PostElements/PostsSlice'
import FilterReducer from "../Components/Presentational/Filters/filterSlice";
import TrendingReducer from "../Components/Presentational/Trending/TrendingSlice";



export const store = configureStore({
    reducer :{
        posts: PostsReducer,
        category : FilterReducer,
        trending: TrendingReducer,
        
        
    }
})