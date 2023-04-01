import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts, selectAllPosts,  selectStatus } from './PostElements/PostsSlice'
import moment from 'moment/moment'

import PostTile from './PostElements/PostTile'
import FilterTile from './Filters/FilterTile'
import TrendingContainer from './Trending/TrendingContainer'






function Home() {

  const dispatch = useDispatch()
    const PostsStatus = useSelector(selectStatus)
    //const error = useSelector(selectError)
    const allPosts = useSelector(selectAllPosts)

    useEffect (()=>{
      if (PostsStatus === 'idle'){
          dispatch(fetchPosts())
         
      }
  }, [PostsStatus, dispatch])

  if (PostsStatus !=='succeeded'){
    return (
        <div>Loading...</div>
    )
}
  return (
    <div>  
      <TrendingContainer/>  
      <FilterTile/>
     { allPosts !== 'undefined' &&
            allPosts.children.map(post => 
            <PostTile
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