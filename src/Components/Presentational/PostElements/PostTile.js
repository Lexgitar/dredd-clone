import './postTile.css'
import Comments from '../Comments/Comments'

import { useState, useEffect } from 'react'

import { fetchComments } from './PostsSlice'
import { useDispatch } from 'react-redux'


function PostTile({
    postId,
    name,
    postScore,
    postTitle,
    postImgUrl,
    postAuthor,
    timeAgo,
    numComments,
    permalink  ,
    index  ,
    comms
}) {
    const dispatch = useDispatch()
     const [rating, setRating] = useState(postScore)   
     const [check , setCheck] = useState(false)

    
    const handleVote=(arg)=>{
        arg? setRating(rating +1) : setRating(rating - 1)
    }

    const handleComments = ()=>{
    
         check?setCheck(false): setCheck(true)
         
    }
 
    const renderComments=(name)=>{
       
  
       if(comms.length){
        return comms.map((comment) =>   <Comments
          key ={comment.data.id}
          name={name}
         comment={comment}

         />
        )} 
                    
    }
    
 
    useEffect(()=>{
      if (check){
         dispatch(fetchComments({permalink, index}))}
  
     
 },[check])
   
    
    return   (
           
            <div className='wrapper' key={postId} >
                
                <div className='post-tile'>
                    <div className="rating">
                        <i onClick={()=>{handleVote(postId)}}  className="fa-solid fa-arrow-turn-up"></i>
                        <h6>{rating}</h6>
                        <i onClick={()=>{handleVote()}}  className="fa-solid fa-arrow-turn-down "></i>
                    </div>
                    <div className="pic">
                       <h4>{postTitle}</h4>
                       {/* <h4>name:{name}</h4>
                       <h4>index:{index}</h4> */}
                      
                        <img src={postImgUrl} alt="" /> 
                        <div className='aux'>       
                            <div className="username">{postAuthor}</div>
                            <div className="timeAgo"><p>{timeAgo}</p></div>
                            <div className="commentsNo">
                                <i className="fa-solid fa-message" onClick={()=>handleComments()} aria-label="Show comments" ></i>
                                <p>{numComments}</p>
                              
                            </div>
                        </div> 
                    </div>
                    
                </div>
                {(check && comms.length>0)  && renderComments(name)}
                    
                
                
                
                
            </div>
          )
   }


export default PostTile