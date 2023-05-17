import './postTile.css'
import Comments from '../Comments/Comments'


import { useState, useEffect } from 'react'

import { fetchComments,selectComments,selectStatus  } from '../Comments/commentsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { addComments } from './PostsSlice'


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
     const[done, setDone]=useState(false)
     const [myComs, setMyComs] = useState([])

     const comments = useSelector(selectComments)
     const status = useSelector(selectStatus)
     //const error = useSelector(selectErrorMessage)
    
    const handleVote=(arg)=>{
        arg? setRating(rating +1) : setRating(rating - 1)
    }



    const handleComments = ()=>{
    
            //setMyComs(comments.filter((comment) =>  comment.data.parent_id===name))
         check?setCheck(false): setCheck(true)
    }

      
    const renderComments=(name)=>{
            
        const [  destruc] = comments
         
     //console.log(comments.map((comment)=>comment),'da')
       
        //let filtered =   destruc.filter(comment =>  comment.data.parent_id===name)

       // const filtered2 = comments.filter((com)=> com.filter((co)=> co.data.parent_id === name))
       // console.log(destruc,comments,comments[0] ,...destruc)
       // console.log(comments)
        console.log(destruc, destruc.index, {destruc})
       // return filtered.map((comment) =>   <Comments
        // return filtered2.map((comment) =>   <Comments
        
       dispatch(addComments(destruc))
       if(comms.length){
        return comms.map((comment) =>   <Comments
          key ={comment.data.id}
          name={name}
        //  comment={comment.data.body} 
        //  id = {comment.data.parent_id}
        //  author={comment.data.author}
            comment={comment}

         />
        )} 
                    
    }
    

    //console.log(name)
 
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
                       <h4>name:{name}</h4>
                       <h4>index:{index}</h4>
                       {/* <h4>comms:{comms.map((com)=>com.data.body)}</h4> */}
                        <img src={postImgUrl} alt="" /> 
                        <div className='aux'>       
                            <div className="username">{postAuthor}</div>
                            <div className="timeAgo"><p>{timeAgo}</p></div>
                            <div className="commentsNo">
                                <i className="fa-solid fa-message" onClick={()=>handleComments()} aria-label="Show comments" ></i>
                                <p>{numComments}</p>
                                {/* {console.log(name)}
                               {console.log( comments.filter((com)=> {return com.link_id===name}))} */}
                            </div>
                        </div> 
                    </div>
                
                </div>
                {(check && comments.length>0)  && renderComments(name)}
                
                
            </div>
          )
        




}

export default PostTile