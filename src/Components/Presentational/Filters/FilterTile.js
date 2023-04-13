import './filter.css'
import { filterByHot, filterByNew, filterByTop } from '../PostElements/PostsSlice'
import { useDispatch } from 'react-redux'




function FilterTile() {
const dispatch = useDispatch()

  return (
    <div className='filter' > 
        <h5>Popular posts</h5>
        <div className="fcard">        
            <div className='param'onClick={()=> dispatch(filterByHot())}  ><i className="fa-solid fa-fire-flame-curved"></i>Hot</div>
            <div className='param' onClick={()=> dispatch(filterByNew())}  ><i className="fa-solid fa-bolt"></i>New</div>
            <div className='param' onClick={()=> dispatch(filterByTop())}  ><i className="fa-solid fa-arrow-up"></i>Top</div>
        </div>
    </div>
  )

}

export default FilterTile