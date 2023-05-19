import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch, batch } from 'react-redux';
import {  selectAllPosts,  } from './PostElements/PostsSlice'
import moment from 'moment/moment'

import PostTile from './PostElements/PostTile'
import FilterTile from './Filters/FilterTile'
import TrendingContainer from './Trending/TrendingContainer'



import { getLink } from './Filters/filterSlice'

import { fetchPosts } from './PostElements/PostsSlice'

import { selectPopular, selectCelebs, selectMusic, selectPopSts, selectMusSts, selectCelSts  } from './Trending/TrendingSlice'
import { fetchPopular, fetchMusic, fetchCelebs } from './Trending//TrendingSlice';




function Home() {
    const dispatch = useDispatch() 
    const allPosts = useSelector(selectAllPosts)

    const linkage = useSelector(getLink)

    const popular = useSelector(selectPopular)
    const music = useSelector(selectMusic)
    const celebs = useSelector(selectCelebs)

    const popSts = useSelector(selectPopSts)
    const musSts = useSelector(selectMusSts)
    const celSts = useSelector(selectCelSts)


  useEffect (()=>{  
      dispatch(fetchPosts(linkage))         
          return()=>{
              // console.log('layout2')
          }
  }, [dispatch, linkage])

  useEffect(()=>{
      batch(() => {          
             dispatch(fetchPopular('popular'))
              dispatch(fetchMusic('music'))
              dispatch(fetchCelebs('celebrities'))   
            })            
        return()=>{       
       }         
  },[dispatch])
  
  const allThree = (popSts==='succeeded' && musSts==='succeeded'&& celSts==='succeeded') &&   music.slice().concat(celebs.slice(), popular.slice()) 
 //test
 // console.log(allPosts !== 'undefined' &&allPosts)
  ///test
  return (
    <div> 
      
        <title>Dreddit | Home</title>
        
      {allThree.length > 3 && <TrendingContainer allThree={allThree}/>  }
                   
                    <FilterTile/>
     
     { (allPosts !== 'undefined' && allPosts.length) &&
            allPosts.map((post, index )=> 
            <PostTile
                  key={post.data.id}
                      postId={post.data.id}
                      name={post.data.name}
                      postScore={post.data.score}
                      postTitle={post.data.title}
                      postImgUrl={post.data.url}
                      postThumbnail = {post.data.thumbnail}
                      postAuthor = {post.data.author}
                      timeAgo = {moment.unix(post.data.created_utc).fromNow()}
                      numComments={post.data.num_comments}
                      permalink={post.data.permalink}
                      index={index}
                      comms={post.comments}
            />
        )}
      
    </div>
    
  )
}

export default Home