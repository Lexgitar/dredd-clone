import React from 'react'
import { NavLink } from 'react-router-dom'

function Logo({handleClick}) {

// const handleChange = handleClick

  return (
   
        <NavLink onClick={handleClick}>
            
            <div className='logo'><i className="fa-brands fa-reddit-alien"></i></div>
        </NavLink>
    
  )
}

export default Logo