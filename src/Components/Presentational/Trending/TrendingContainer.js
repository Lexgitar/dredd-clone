
import './trending.css';
import { Link } from 'react-router-dom';

function TrendingContainer({allThree}) {

   const ranked = allThree.slice().sort((a,b)=>(!a.data.is_video? a.data.ups: a.upvote_ratio ) < (!b.data.is_video? b.data.ups: b.data.upvote_ratio)  )
   const topFour = ranked.slice(0,4)
   
  

   



  return (
   
     
        <div className='trend-c'>

         {console.log(ranked)}
         {console.log(topFour)}
         
            <h5>Trending today</h5>
            <div className="images" id='images'>
                {topFour.map(post =>
                    <Link  key={post.data.id} to={post.data.url} className="cards" style={{backgroundImage:`url(${post.data.url_overridden_by_dest})`}}>
                    <p>{post.data.title}</p>
                    <h5>{post.data.domain}</h5>
                </Link>
                    )}
                
                {/* <Link to='/33'  className="cards" style={{backgroundImage:'url("https://overclock3d.net/gfx/articles/2023/03/23104626464l.jpg")'}}>
                    <p>Title</p>
                    <h5>Subtitle paragraph</h5>
                </Link>
                <Link to='/2' className="cards" style={{backgroundImage:'url("https://overclock3d.net/gfx/articles/2023/03/23104626464l.jpg")'}}>
                    <p>Title</p>
                    <h5>Subtitle paragraph</h5>
                </Link>
                <Link to='/3' className="cards" style={{backgroundImage:'url("https://overclock3d.net/gfx/articles/2023/03/23104626464l.jpg")'}}>
                    <p>Title</p>
                    <h5>Subtitle paragraph</h5>
                </Link> */}
            </div>
        </div>
  
  )
}

export default TrendingContainer