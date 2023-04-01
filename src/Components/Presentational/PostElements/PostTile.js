import './postTile.css'

import { useState } from 'react'

function PostTile({
    postId,
    postScore,
    postTitle,
    postImgUrl,
    postAuthor,
    timeAgo,
    numComments
}) {
     const [rating, setRating] = useState(postScore)   
    
    const handleVote=(arg)=>{
        arg? setRating(rating +1) : setRating(rating - 1)
    }
    
       
    return   (
           
            <div className='wrapper' key={postId} >
                 
                <div className='post-tile'>
                    <div className="rating">
                        <i onClick={()=>{handleVote(rating)}}  className="fa-solid fa-arrow-turn-up"></i>
                        <h6>{rating}</h6>
                        <i onClick={()=>{handleVote()}}  className="fa-solid fa-arrow-turn-down "></i>
                    </div>
                    <div className="pic">
                       <h4>{postTitle}</h4>
                        <img src={postImgUrl} alt="" /> 
                        <div className='aux'>       
                            <div className="username">{postAuthor}</div>
                            <div className="timeAgo"><p>{timeAgo}</p></div>
                            <div className="commentsNo">
                                <i className="fa-solid fa-message"></i>
                                <p>{numComments}</p>
                                
                            </div>
                        </div> 
                    </div>
                
                </div>
            
            </div>
          )
        




}

export default PostTile