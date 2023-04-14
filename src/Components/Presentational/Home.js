import React from 'react'
//import { useEffect } from 'react'
import {  selectAllPosts,  selectStatus } from './PostElements/PostsSlice'
import moment from 'moment/moment'
import PostTile from './PostElements/PostTile'
//import FilterTile from './Filters/FilterTile'
//import TrendingContainer from './Trending/TrendingContainer'

//import { batch } from 'react-redux';
import { useSelector } from 'react-redux';

       





function Home() {
 
    const allPosts = useSelector(selectAllPosts)
    const PostsStatus = useSelector(selectStatus)

    //const dispatch = useDispatch()
   
    //const allThree = [music.concat(celebs, popular) ]



    


   
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
        {/* {console.log(allThree)}
        {console.log(allPosts)} */}
        {/* <TrendingContainer allThree ={allThree} />  
          <FilterTile/>  */}
      
     
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