import './postTile.css'

function PostTile() {
  return (
    <div className='wrapper'>
    <div className='post-tile'>
        <div className="rating">
            <i class="fa-solid fa-arrow-turn-up"></i>
            <h6>1000</h6>
            <i class="fa-solid fa-arrow-turn-down "></i>
        </div>
        <div className="pic">
            <h4>Post Title Lorem ipsum dolor sit amet consectetur.</h4>
            <img src="1.jpg" alt="" />
            <div className='aux'>       
            <div className="username">user_name</div>
            <div className="timeAgo"><p>3 hours ago</p></div>
            <div className="commentsNo">
                <i class="fa-solid fa-message"></i>
                <p>122</p>
            </div>
        </div> 
        </div>
       
    </div>
    
    </div>
  )
}

export default PostTile