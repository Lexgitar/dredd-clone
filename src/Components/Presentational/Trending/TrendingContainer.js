import './trending.css';
import { Link } from 'react-router-dom';


function TrendingContainer({allThree}) {

    
    //const ranked = allThree.slice().sort((a,b)=>(!a.data.is_video? a.data.ups: a.upvote_ratio ) < (!b.data.is_video? b.data.ups: b.data.upvote_ratio)); 
    //const ranked = allThree.slice().filter(post=>post.data.url=true ).sort((a,b)=> a.data.ups  <  b.data.ups); 
    const ranked = allThree.sort((a,b)=> (a.data.ups)  <  (b.data.ups)); 
    const topFour = ranked.slice(0,4)


  return (
   
     
        <div className='trend-c'>
        
            <h5>Trending today</h5>
            <div className="images" id='images'>
                {topFour.length === 4 && topFour.map(post =>
                    <Link  key={post.data.id} to={post.data.url} className="cards" style={{backgroundImage:`url(${post.data.url})`}}>
                    <p>{post.data.title.substring(0,50).concat(' ...')}</p>
                    <h5>{post.data.author}</h5>
                    {/* {console.log(ranked)} */}
                </Link>
                    )}
                
                
            </div>
        </div>
  
  )
}

export default TrendingContainer