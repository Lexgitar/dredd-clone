import './filter.css'
//import { NavLink } from 'react-router-dom'
import { filterByHot, filterByNew, filterByTop } from '../PostElements/PostsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { getCategory } from './FilterSlice'
import { useEffect, useState } from 'react'




function FilterTile() {
  const category = useSelector(getCategory)
  const p = 'param'
  const a = 'param actives'
const dispatch = useDispatch()
// eslint-disable-next-line
const [start, setStart]=useState('param')
const [one, setOne]=useState(start)
const [two, setTwo]=useState(start)
const [three, setThree]=useState(start)

useEffect(()=>{
 
 setOne(start)
 setTwo(start)
 setThree(start)
// eslint-disable-next-line
},[category])

const handleClassChange=(arg)=>{
    if (arg === 'one'){
      one===p? setOne(a):setOne(p)
      setTwo(p)
      setThree(p)
    }else if(arg === 'two'){
     two===p? setTwo(a):setTwo(p)
      setOne(p)
      setThree(p)
    }else{
      three===p? setThree(a):setThree(p)
      setOne(p)
      setTwo(p)
    }

}

  return (
    <div className='filter' > 
        <h5>Popular posts</h5>
        <div className="fcard">        
          <div  className={one}  onClick={()=>{dispatch(filterByHot());handleClassChange('one')} } ><i className="fa-solid fa-fire-flame-curved"></i>Hot</div>
            <div className={two} onClick={()=> {dispatch(filterByNew()); handleClassChange('two')}}  ><i className="fa-solid fa-bolt"></i>New</div>
            <div className={three} onClick={()=> {dispatch(filterByTop()); handleClassChange('three')}}  ><i className="fa-solid fa-arrow-up"></i>Top</div>
        </div>
    </div>
  )

}

export default FilterTile