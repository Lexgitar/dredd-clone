import { useEffect } from 'react'
import { batch } from 'react-redux'
import './layout-section.css'
import { NavLink, Outlet } from 'react-router-dom'
import Logo from '../Functional/Logo'
import Popular from '../Functional/Popular'
import Menu from '../Functional/Menu'
import SearchBar from '../Functional/SearchBar'
import Usernotfunctional from '../Functional/Usernotfunctional'
import TrendingContainer from './Trending/TrendingContainer'
import FilterTile from './Filters/FilterTile'
import {useSelector,  useDispatch } from 'react-redux'
import { setCategory } from './Filters/filterSlice'

import { getLink } from './Filters/filterSlice'

import { fetchPosts } from './PostElements/PostsSlice'

import { selectPopular, selectCelebs, selectMusic  } from './Trending/TrendingSlice'
import { fetchPopular, fetchMusic, fetchCelebs } from './Trending//TrendingSlice';




function Layout() {
    const dispatch = useDispatch()
    
    const linkage = useSelector(getLink)

    const popular = useSelector(selectPopular)
    const music = useSelector(selectMusic)
    const celebs = useSelector(selectCelebs)
    //const trendingStatus = useSelector(selectTrendStatus)
    //const allTrends = useSelector(selectTrending)
    const allThree =  popular !==null && music.slice().concat(celebs.slice(), popular.slice()) 
   
    

    const handleChange=(arg)=>{
        dispatch(setCategory(arg))
    }

    useEffect (()=>{
       
            dispatch(fetchPosts(linkage))
           
            return()=>{
               // console.log('layout2')
            }
        
    }, [ dispatch,linkage])

    useEffect(()=>{
       

        batch(() => {
                //dispatch(fetchPopular()).then(dispatch(fetchMusic())).then(dispatch(fetchCelebs()))
               dispatch(fetchPopular())
                dispatch(fetchMusic())
                dispatch(fetchCelebs())
              })            
        

        
  
          return()=>{
            // console.log('layout2')
         }
           
    },[dispatch])


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
                    {!allThree.length && <> Loading Trending </>}
                    {allThree.length &&<TrendingContainer allThree={allThree}/>  }
                    <FilterTile/>
                    <Outlet />
                </main>
            </div>
        </div>       
    </div>
  
  )
}

export default Layout