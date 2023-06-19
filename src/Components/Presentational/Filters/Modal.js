import './modal.css'

import { NavLink } from 'react-router-dom'
import {  useDispatch } from 'react-redux'
import { setCategory } from './FilterSlice'





function Modal() {
    const dispatch = useDispatch()
  
   
    

    const handleChange=(e)=>{
        dispatch(setCategory(e))
    }

    

  return (
    <div>
        <section className='topics-modal'>
            <div className='modal-wrapper'>       
                <div  className="modal-topics">
                    <NavLink onClick={()=> handleChange('r/gaming')} >      
                        <i className="fa-solid fa-regular fa-gamepad"></i>
                        <h6>Gaming</h6> 
                    </NavLink>
                    <NavLink onClick={()=>handleChange('r/business')}  >  
                        <i className="fa-sharp fa-solid fa-chart-simple"></i>
                        <h6 className='moved'>Business</h6>    
                    </NavLink>
                    <NavLink  onClick={()=>handleChange('r/television')}> 
                        <i className="fa-solid fa-tv"></i>
                        <h6>Television</h6>
                    </NavLink>
                    <NavLink  onClick={()=>handleChange('r/animals')}>                
                        <i className="fa-solid fa-hippo"></i>
                        <h6>Animals</h6>                        
                    </NavLink>
                </div>
            </div>
         </section>
    </div>
  )
}

export default Modal