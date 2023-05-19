import React from 'react'
import './comments.css'
import moment from 'moment/moment'



const Comments = ({comment}) => {
 
  
  return (
    <div className='commDiv'>
      <div className='commentCard'>
        <div className='cominfo'>
          <h4>{comment.data.author}</h4>
          <p>{moment.unix(comment.data.created_utc).fromNow()}</p>
        </div>
        <p className='com'>{comment.data.body}</p>
        
          
          
      </div>
    </div>
  )
  
 }  



export default Comments

