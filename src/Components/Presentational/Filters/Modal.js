import './modal.css'
import React from 'react'
import { NavLink } from 'react-router-dom'

function Modal() {
  return (
    <div>
        <section className='topics-modal'>
                <div className='modal-wrapper'>
                   
                    <div  className="modal-topics">
                        <NavLink>
                            <a>
                                <i class="fa-solid fa-regular fa-gamepad"></i><h6>Games</h6>
                            </a>
                        </NavLink>
                        <NavLink>
                            <a >
                            <i class="fa-sharp fa-solid fa-chart-simple"></i><h6 className='moved'>Business</h6>
                            </a>
                        </NavLink>
                        <NavLink> <a >
                            <i class="fa-solid fa-tv"></i><h6>Television</h6>
                        </a>
                        </NavLink>
                        <NavLink>
                            <a >
                                <i class="fa-solid fa-hippo"></i><h6>Animals</h6>
                            </a>
                        </NavLink>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default Modal