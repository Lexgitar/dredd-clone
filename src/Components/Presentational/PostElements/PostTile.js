import './postTile.css'
import { useDispatch, useSelector } from 'react-redux'
import {toggleUp, toggleDown, selectRating} from './PostTileSlice'
import { fetchPosts, selectAllPosts, selectError, selectStatus } from './PostsSlice'
import { useEffect } from 'react'
function PostTile() {
    const rating = useSelector(selectRating)
    const dispatch = useDispatch()
    const PostsStatus = useSelector(selectStatus)
    const error = useSelector(selectError)
    const allPosts = useSelector(selectAllPosts)
    const fake = [{id:1, title:'one'}, {id:2, title:'two'}]
    
    const content = allPosts.data.children.map(post => 
        (
            <div className='wrapper' key={post.data.id} >
                <div className='post-tile'>
                    <div className="rating">
                        <i onClick={()=> dispatch(toggleUp())}  className="fa-solid fa-arrow-turn-up"></i>
                        <h6>{rating}</h6>
                        <i onClick={()=>dispatch(toggleDown())} className="fa-solid fa-arrow-turn-down "></i>
                    </div>
                    <div className="pic">
                       <h4>{post.data.title}</h4>
                       {/* {allPosts.map(post => (
                        <h4 key={post.author} >{post.author}</h4>
                       ))} */}
                       <h4>{console.log(allPosts)}</h4>
                        <img src="1.jpg" alt="" />
                        <div className='aux'>       
                            <div className="username">{post.data.author}</div>
                            <div className="timeAgo"><p>{PostsStatus}</p></div>
                            <div className="commentsNo">
                                <i className="fa-solid fa-message"></i>
                                <p>{post.data.num_comments}</p>
                            </div>
                        </div> 
                    </div>
                
                </div>
            
            </div>
          )
        )
    

useEffect (()=>{
    if (PostsStatus === 'idle'){
        dispatch(fetchPosts())
       
    }
}, [PostsStatus, dispatch])

if (PostsStatus !='succeeded' && allPosts === undefined){
    return (
        <div>Loading...</div>
    )
}
 
// return (
// <div className='wrapper'>
//     <div className='post-tile'>
//         <div className="rating">
//             <i onClick={()=> dispatch(toggleUp())}  className="fa-solid fa-arrow-turn-up"></i>
//             <h6>{rating}</h6>
//             <i onClick={()=>dispatch(toggleDown())} className="fa-solid fa-arrow-turn-down "></i>
//         </div>
//         <div className="pic">
//             <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, iure?</h4>
//             {console.log(allPosts.data.children)}
//             <img src="1.jpg" alt="" />
//             <div className='aux'>     
//             {/* {console.log(allPosts.data.children[23].data.author)}   */}
//                 <div className="username">user</div>
//                 <div className="timeAgo"><p>{PostsStatus}</p></div>
//                 <div className="commentsNo">
//                     <i className="fa-solid fa-message"></i>
//                     <p>122</p>
//                 </div>
//             </div> 
//         </div>
    
//     </div>

// </div>
//  )


return content

}

export default PostTile