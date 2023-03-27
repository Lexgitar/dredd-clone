import './filter.css'

function FilterTile() {
  return (
    <div className='filter' > 
        <h5>Popular posts</h5>
        <div className="fcard">        
            <div className='param' ><i class="fa-solid fa-fire-flame-curved"></i>Hot</div>
            <div className='param' ><i class="fa-solid fa-bolt"></i>New</div>
            <div className='param' ><i class="fa-solid fa-arrow-up"></i>Top</div>
        </div>
    </div>
  )

}

export default FilterTile