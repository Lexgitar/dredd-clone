import './modal.css'
import React from 'react'
import { NavLink } from 'react-router-dom'


function Modal() {
  return (
    <div>
        <section className='topics-modal'>
            <div className='modal-wrapper'>       
                <div  className="modal-topics">
                    <NavLink to='/mock'>      
                        <i className="fa-solid fa-regular fa-gamepad"></i>
                        <h6>Games</h6> 
                    </NavLink>
                    <NavLink>  
                        <i className="fa-sharp fa-solid fa-chart-simple"></i>
                        <h6 className='moved'>Business</h6>    
                    </NavLink>
                    <NavLink> 
                        <i className="fa-solid fa-tv"></i>
                        <h6>Television</h6>
                    </NavLink>
                    <NavLink>                
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