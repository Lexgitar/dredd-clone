import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import SearchBar from '../Functional/SearchBar'
import './layout-section.css'
import Modal from './Filters/Modal'


function Layout() {
  return (
    <div className='layout' >
        <header>
            <nav>
                <div className="logo"><i class="fa fa-reddit-alien" aria-hidden="true"></i></div>
                <div className="popular"><i class="fa-solid fa-arrow-trend-up"></i></div>
                <div className="menu"><i class="fa-solid fa-bars"></i></div>
                <div className="searchbar"><SearchBar/></div>
                <div className="user"><i class="fa-solid fa-user"></i></div>
            </nav>
            
            
        </header>
        <Modal/>
        <div className="sections">
            <section className='topics'>
                <div className='topic-wrapper'>
                    <a href="#" className="pop">
                      <i class="fa-solid fa-arrow-trend-up"></i><h6>Popular</h6>
                    </a>
                    <div href="" className="alltops">
                        <a href="#">
                            <i class="fa-solid fa-regular fa-gamepad"></i><h6>Games</h6>
                        </a>
                        <a href="#">
                         <i class="fa-sharp fa-solid fa-chart-simple"></i><h6 className='move'>Business</h6>
                        </a> 
                        <a href="#">
                            <i class="fa-solid fa-tv"></i><h6>Television</h6>
                        </a>
                        <a href="#">
                            <i class="fa-solid fa-hippo"></i><h6>Animals</h6>
                        </a>
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