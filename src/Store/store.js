import { configureStore } from "@reduxjs/toolkit";
import PostsReducer from '../Components/Presentational/PostElements/PostsSlice'
import FilterReducer from "../Components/Presentational/Filters/filterSlice";
import TrendingReducer from "../Components/Presentational/Trending/TrendingSlice";
import  CommentsReducer  from "../Components/Presentational/Comments/commentsSlice";
import mockReducer from "../Components/Presentational/Mock/mockSlice";

export const store = configureStore({
    reducer :{
        posts: PostsReducer,
        category : FilterReducer,
        trending: TrendingReducer,
        comments: CommentsReducer,
        mock: mockReducer
        
    }
})