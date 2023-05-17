
import './layout-section.css'
import { NavLink, Outlet } from 'react-router-dom'

import Logo from '../Functional/Logo'
import Popular from '../Functional/Popular'
import Menu from '../Functional/Menu'
import SearchBar from '../Functional/SearchBar'
import Usernotfunctional from '../Functional/Usernotfunctional'

import { setCategory } from './Filters/filterSlice'

 import {  useDispatch } from 'react-redux'





function Layout() {

    const dispatch = useDispatch()
    
    const handleChange=(arg)=>{
        dispatch(setCategory(arg))
        
    }

    

  return (
   
    <div className='layout' >
       
        <header>
            <nav>
                <Logo handleClick={()=>handleChange('r/popular')} />
                <Popular/>
                <Menu />
                <SearchBar/>
                <Usernotfunctional/>
            </nav>         
               
        </header>  
        
        <div className="sections" aria-label='menu-left' >
        
            <section className='topics'>
                <div className='topic-wrapper'>
                    <NavLink to='' className="pop" onClick={()=>handleChange('r/popular')} >
                      <i className="fa-solid fa-arrow-trend-up"></i><h6>Popular</h6>
                    </NavLink>
                    <div  className="alltops">
                        <NavLink to='/'   onClick={( )=> handleChange('r/gaming')} >
                            <i className="fa-solid fa-regular fa-gamepad"></i><h6>Gaming</h6>
                        </NavLink>
                        <NavLink  onClick={()=>handleChange('r/business')}  >
                         <i className="fa-sharp fa-solid fa-chart-simple"></i><h6 className='move'>Business</h6>
                        </NavLink> 
                        <NavLink onClick={()=>handleChange('r/television')} >
                            <i className="fa-solid fa-tv"></i><h6>Television</h6>
                        </NavLink>
                        <NavLink onClick={()=>handleChange('r/animals')} >
                            <i className="fa-solid fa-hippo"></i><h6>Animals</h6>
                        </NavLink>
                    </div>
                </div>
            </section>
            <div className="main-wrapper">
                <main className='main'>
                    
                    <Outlet />
                </main>
            </div>
        </div>       
    </div>
  
  )
}

export default Layout