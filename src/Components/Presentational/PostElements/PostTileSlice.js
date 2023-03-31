import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    rating:1000,
    
}



const PostTileSlice = createSlice({
    name: 'tile',
    initialState,
    reducers:{
        toggleUp : (state)=>{
              state.rating+=1;
        },
        toggleDown:(state)=>{
            state.rating-=1 ;
       },
    }
})

export default PostTileSlice.reducer
export const {toggleUp, toggleDown} = PostTileSlice.actions
export const selectRating = (state) => state.tiles.rating