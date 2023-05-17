import React, {useState ,useEffect } from 'react'
import './comments.css'
import {  useDispatch } from 'react-redux'
//import { fetchComments } from './commentsSlice'
import  { resetComments } from './commentsSlice'


const Comments = ({name,comment}) => {
 





 
  
  return (
    <div className='commentCard'>
       <h4>author:{comment.data.author}</h4>
       <h5>name:{name}</h5>
       <h5>time ago</h5>
       <p>body:{comment.data.body}</p>
       <p>parent_id:{comment.data.parent_id}</p>
        
        
    </div>
  )
  
 }  


  
  

export default Comments

