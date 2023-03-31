import React from 'react'
import PostTile from './PostElements/PostTile'
import FilterTile from './Filters/FilterTile'
import TrendingContainer from './Trending/TrendingContainer'




function Home() {
  return (
    <div>  
      <TrendingContainer/>  
      <FilterTile/>
      <PostTile/>
      
    </div>
  )
}

export default Home