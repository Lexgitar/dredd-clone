import React from 'react'
import { useEffect } from 'react'
import {  selectAllPosts,  selectStatus } from './PostElements/PostsSlice'
import moment from 'moment/moment'
import PostTile from './PostElements/PostTile'
import FilterTile from './Filters/FilterTile'
import TrendingContainer from './Trending/TrendingContainer'

import { batch } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { selectPopular,selectTrendStatus, selectCelebs, selectMusic, selectTrending  } from './Trending/TrendingSlice'
import { fetchPopular, fetchMusic, fetchCelebs } from './Trending//TrendingSlice';
       





function Home() {
 
    const allPosts = useSelector(selectAllPosts)
    const PostsStatus = useSelector(selectStatus)

    const dispatch = useDispatch()
    const popular = useSelector(selectPopular)
    const music = useSelector(selectMusic)
    const celebs = useSelector(selectCelebs)
    const trendingStatus = useSelector(selectTrendStatus)
    const allTrends = useSelector(selectTrending)
    const allThree =  popular !==null && music.slice().concat(celebs.slice(), popular.slice()) 
    //const allThree = [music.concat(celebs, popular) ]



    useEffect(()=>{
        

      batch(() => {
          //dispatch(fetchPopular()).then(dispatch(fetchMusic())).then(dispatch(fetchCelebs()))
         dispatch(fetchPopular())
          dispatch(fetchMusic())
          dispatch(fetchCelebs())
        })

        return()=>{
          // console.log('layout2')
       }
         
  },[dispatch])


   
    if (PostsStatus !=='succeeded'){
      return (
        <>
          
          <div>Loading...</div>
         </>
      )
 }

   
  return (
    <div> 
      
        <title>Dreddit | Home</title>
        {console.log(allThree)}
        {console.log(allPosts)}
        <TrendingContainer allThree ={allThree} />  
          <FilterTile/> 
      
     {/* {console.log(allPosts)} */}
     { allPosts !== 'undefined' &&
            allPosts.map(post => 
            <PostTile
           
            key={post.data.id}
                postId={post.data.id}
                postScore={post.data.score}
                postTitle={post.data.title}
                postImgUrl={post.data.url_overridden_by_dest}
                postThumbnail = {post.data.thumbnail}
                postAuthor = {post.data.author}
                timeAgo = {moment.unix(post.data.created_utc).fromNow()}
                numComments={post.data.num_comments}
            />)
            
     }
      
    </div>
  )
}

export default Home