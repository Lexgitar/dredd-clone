import { createSlice } from "@reduxjs/toolkit";

const proxyUrl = "https://cors-anywhere.herokuapp.com/";

const buildRedditUrl = (category) => {
  return `${proxyUrl}https://www.reddit.com/${category}.json?limit=10`;
};

const initialState = {
  category: 'r/popular',
  link: buildRedditUrl('r/popular')
};

export const filterSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
      state.link = buildRedditUrl(state.category);
    }
  }
});

export default filterSlice.reducer;
export const { setCategory } = filterSlice.actions;
export const getCategory = (state) => state.category.category;
export const getLink = (state) => state.category.link;
