import React from 'react'
import PostTile from './PostElements/PostTile'
import FilterTile from './Filters/FilterTile'
import TrendingContainer from './Trending/TrendingContainer'
import Modal from './Filters/Modal'



function Home() {
  return (
    <div>
      
    <TrendingContainer/>  
    <FilterTile/>
      <PostTile/>
      <PostTile/>
    </div>
  )
}

export default Home