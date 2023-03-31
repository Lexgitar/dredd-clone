import React from 'react'
import './layout-section.css'
import { NavLink, Outlet } from 'react-router-dom'

import Logo from '../Functional/Logo'
import Popular from '../Functional/Popular'
import Menu from '../Functional/Menu'
import SearchBar from '../Functional/SearchBar'
import Usernotfunctional from '../Functional/Usernotfunctional'



function Layout() {
  return (
    <div className='layout' >
        <header>
            <nav>
                <Logo/>
                <Popular/>
                <Menu />
                <SearchBar/>
                <Usernotfunctional/>
            </nav>            
        </header>    
        <div className="sections" aria-label='menu-left' >
            <section className='topics'>
                <div className='topic-wrapper'>
                    <NavLink to='' className="pop">
                      <i className="fa-solid fa-arrow-trend-up"></i><h6>Popular</h6>
                    </NavLink>
                    <div  className="alltops">
                        <NavLink to='/' >
                            <i className="fa-solid fa-regular fa-gamepad"></i><h6>Games</h6>
                        </NavLink>
                        <NavLink >
                         <i className="fa-sharp fa-solid fa-chart-simple"></i><h6 className='move'>Business</h6>
                        </NavLink> 
                        <NavLink >
                            <i className="fa-solid fa-tv"></i><h6>Television</h6>
                        </NavLink>
                        <NavLink >
                            <i className="fa-solid fa-hippo"></i><h6>Animals</h6>
                        </NavLink>
                    </div>
                </div>
            </section>
            <div className="main-wrapper">
                <main className='main'>
                    
                    <Outlet/>
                </main>
            </div>
        </div>       
    </div>
  )
}

export default Layout