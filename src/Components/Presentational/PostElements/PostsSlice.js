import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

const buildRedditUrl = (url) => {
  if (!url) return `${proxyUrl}https://www.reddit.com/r/popular.json?limit=10`;
  if (url.startsWith('http')) return `${proxyUrl}${url}`;
  return `${proxyUrl}https://www.reddit.com${url}`;
};

const initialState = {
  posts: [],
  status: 'idle',
  error: null,
  fetchStatus: 'idle',
  fetchError: null,
  term: ''
};

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (arg) => {
  const targetUrl = arg ? buildRedditUrl(arg) : `${proxyUrl}https://www.reddit.com/r/popular.json?limit=10`;
  const response = await axios.get(targetUrl);
  return response.data.data.children;
});

const apiBase = (arg) => {
  return `https://www.reddit.com${arg}.json`;
};

export const fetchComments = createAsyncThunk('comments/fetchComments',
  async ({ permalink, index }) => {
    if (!permalink) return;

    const response = await fetch(buildRedditUrl(apiBase(permalink)));
    const json = await response.json();
    const lode = json[1].data.children;

    let [...destr2] = lode;
    return { comments: [...destr2], index };
  });

export const PostsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    termChange: (state, action) => {
      state.term = action.payload;
    },
    filterByHot: (state) => {
      state.posts = state.posts.slice().sort((a, b) => a.data.upvote_ratio < b.data.upvote_ratio);
    },
    filterByNew: (state) => {
      state.posts = state.posts.slice().sort((a, b) => a.data.created < b.data.created);
    },
    filterByTop: (state) => {
      state.posts = state.posts.sort((a, b) => a.data.ups < b.data.ups);
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload.map((post) => ({ ...post, comments: [] }));
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error.message;
      })
      .addCase(fetchComments.pending, (state) => {
        state.fetchStatus = 'loading';
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.fetchStatus = 'succeeded';
        state.posts[action.payload.index].comments = action.payload.comments;
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.fetchStatus = 'rejected';
        state.fetchError = action.error.message;
      });
  }
});

export default PostsSlice.reducer;
export const selectAllPosts = (state) =>
  state.posts.term === '' ? state.posts.posts : state.posts.posts.filter((post) =>
    post.data.title.toLowerCase().includes(state.posts.term.toLowerCase()));

export const selectStatus = (state) => state.posts.status;
export const selectError = (state) => state.posts.error;
export const selectTerm = (state) => state.posts.term;

export const { termChange, filterByHot, filterByNew, filterByTop } = PostsSlice.actions;
