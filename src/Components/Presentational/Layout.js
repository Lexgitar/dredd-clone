
import './layout-section.css'
import { useEffect, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

import Logo from '../Functional/Logo'
import Popular from '../Functional/Popular'
import Menu from '../Functional/Menu'
import SearchBar from '../Functional/SearchBar'
import Usernotfunctional from '../Functional/Usernotfunctional'

import { setCategory, getCategory } from './Filters/FilterSlice'

 import {  useDispatch, useSelector } from 'react-redux'





function Layout() {

    const dispatch = useDispatch()
    const category = useSelector(getCategory)
    const [argo, setArgo] = useState('popular')
    const [className, setClassName]= useState('')
    
    const handleChange=(arg)=>{
        dispatch(setCategory(arg))
       
    }

    useEffect(()=>{
        setArgo(category)
        argo===category && setClassName('activ')
        // eslint-disable-next-line
    },[category])

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
                    <NavLink to='' className={`pop ${argo.replace('r/', '') === 'popular' &&  className}`} onClick={()=>handleChange('r/popular')} >
                      <i className="fa-solid fa-arrow-trend-up"></i><h6>Popular</h6>
                    </NavLink>
                    <div  className="alltops ">
                        <NavLink to='/' className={argo.replace('r/', '') === 'gaming' && className}  onClick={( )=> handleChange('r/gaming')} >
                            <i className="fa-solid fa-regular fa-gamepad"></i><h6>Gaming</h6>
                        </NavLink>
                        <NavLink className={argo.replace('r/', '') === 'business' && className}  onClick={()=>handleChange('r/business')}  >
                         <i className="fa-sharp fa-solid fa-chart-simple"></i><h6 className='move'>Business</h6>
                        </NavLink> 
                        <NavLink className={argo.replace('r/', '') === 'television' && className} onClick={()=>handleChange('r/television')} >
                            <i className="fa-solid fa-tv"></i><h6>Television</h6>
                        </NavLink>
                        <NavLink className={argo.replace('r/', '') === 'animals' && className} onClick={()=>handleChange('r/animals')} >
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