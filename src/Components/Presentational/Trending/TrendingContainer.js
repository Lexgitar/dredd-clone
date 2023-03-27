
import './trending.css';


function TrendingContainer() {
  return (
   
    
        <div className='trend-c'>
            
            <h5>Trending today</h5>
            <div className="images" id='images'>
            <a href='#' className="cards" style={{backgroundImage:'url("https://overclock3d.net/gfx/articles/2023/03/23104626464l.jpg")'}}>
                <p>Title</p>
                <h5>Subtitle paragraph</h5>
            </a>
            <a href='#' className="cards" style={{backgroundImage:'url("https://overclock3d.net/gfx/articles/2023/03/23104626464l.jpg")'}}>
                <p>Title</p>
                <h5>Subtitle paragraph</h5>
            </a>
            <a href='#' className="cards" style={{backgroundImage:'url("https://overclock3d.net/gfx/articles/2023/03/23104626464l.jpg")'}}>
                <p>Title</p>
                <h5>Subtitle paragraph</h5>
            </a>
            <a href='#' className="cards" style={{backgroundImage:'url("https://overclock3d.net/gfx/articles/2023/03/23104626464l.jpg")'}}>
                <p>Title</p>
                <h5>Subtitle paragraph</h5>
            </a>
            </div>
        </div>
  
  )
}

export default TrendingContainer