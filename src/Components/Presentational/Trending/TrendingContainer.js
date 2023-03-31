
import './trending.css';
import { Link } from 'react-router-dom';


function TrendingContainer() {

  return (
   
    
        <div className='trend-c'>
            
            <h5>Trending today</h5>
            <div className="images" id='images'>
                <Link to='/2' className="cards" style={{backgroundImage:'url("https://overclock3d.net/gfx/articles/2023/03/23104626464l.jpg")'}}>
                    <p>Title</p>
                    <h5>Subtitle paragraph</h5>
                </Link>
                <Link to='/33'  className="cards" style={{backgroundImage:'url("https://overclock3d.net/gfx/articles/2023/03/23104626464l.jpg")'}}>
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
                </Link>
            </div>
        </div>
  
  )
}

export default TrendingContainer