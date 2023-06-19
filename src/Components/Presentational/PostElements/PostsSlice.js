import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";



//const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts/?_limit=10';

const initialState = {
    posts: [],
    status: 'idle',
    error:null,
    fetchStatus:'idle',
    fetchError: null,
    term:''
    

}

const postsUrl = 'https://api.reddit.com/r/popular.json';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', 
    async (arg)=>{
    if (arg) {const response = await axios.get(arg)
        const lode = response.data.data.children

     return lode 

     } else {const response = await axios.get(postsUrl)
        const lode = response.data.data.children
        
     return lode
    }
    
}) 

const apiBase=(arg)=>{
   
    return `https://www.reddit.com${arg}.json`
}

export const fetchComments = createAsyncThunk('comments/fetchComments',
async({permalink,index})=>{
    //console.log(permalink)
   if (permalink ){const response = await fetch(apiBase(permalink))
    //const json = await response.json()
   
    const json = await response.json()
    const lode =  json[1].data.children
   // const mappedData = lode.map((comment) =>  comment)
    //let [destr] = mappedData
    let [...destr2] = lode
    //this here 
    return {comments:[...destr2], index: index}
    //.map((comment) =>  comment.data.body)
   
}})

export const PostsSlice = createSlice({
    name:'posts',
    initialState,
    reducers:{
        termChange: (state, action) =>{
            state.term = action.payload
        },
        filterByHot: (state) =>{
            state.posts = state.posts.slice().sort((a,b)=> a.data.upvote_ratio < b.data.upvote_ratio)
        },
        filterByNew: (state) =>{
            state.posts = state.posts.slice().sort((a,b)=> a.data.created < b.data.created)
            alert('by new')
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
            //state.posts = action.payload.map((post)=>({post:post.data.permalink, comments:[]})) 
            state.posts = action.payload.map((post)=>({...post, comments:[]})) 
            
        })
        .addCase(fetchPosts.rejected, (state,action)=>{
            state.status = 'rejected'
            state.error = action.error.message
        })
        .addCase(fetchComments.pending, (state, action)=>{
            state.fetchStatus = 'loading'
        })
        .addCase(fetchComments.fulfilled, (state,action)=>{
            state.fetchStatus = 'succeeded'
            state.posts[action.payload.index].comments = action.payload.comments
              
        })
        .addCase(fetchComments.rejected, (state,action)=>{
            state.fetchStatus = 'rejected'
            state.fetchError = action.error.message
            
        })
    }
})

export default PostsSlice.reducer
export const selectAllPosts = (state)=> state.posts.term === '' ? state.posts.posts : state.posts.posts.filter((post) =>
post.data.title.toLowerCase().includes(state.posts.term.toLowerCase()));
export const selectStatus = (state)=> state.posts.status
export const selectError = (state)=> state.posts.error
export const selectTerm = (state)=> state.posts.term

export const { termChange,filterByHot, filterByNew, filterByTop} = PostsSlice.actions






