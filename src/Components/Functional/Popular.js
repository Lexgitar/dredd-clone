
import { useDispatch } from 'react-redux'
import { setCategory } from '../Presentational/Filters/FilterSlice'






function Popular() {
    // toggle popular posts
    const dispatch = useDispatch()
  
  
   
    

    const handleChange=(e)=>{
        dispatch(setCategory(e))
    }

  
  return (
   <div className='popular' onClick={()=>handleChange('r/popular')}  >
       
            <i className="fa-solid fa-arrow-trend-up"></i>
        
    </div>
  )
}

export default Popular