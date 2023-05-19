import React,{ useEffect, useState } from 'react'
import { getCategory } from '../Presentational/Filters/filterSlice'
import { termChange } from '../Presentational/PostElements/PostsSlice'
import { useSelector, useDispatch } from 'react-redux'

function SearchBar() {
  
const category = useSelector(getCategory)
const [stateTerm, setStateTerm] = useState('')
const [placeholder , setPlaceholder] = useState(`Search ${category.replace('r/', '')}`)
const dispatch = useDispatch()

const handleOnChange = (e)=>{
setStateTerm(e.target.value)

}

useEffect(()=>{
  setPlaceholder(`Search ${category.replace('r/', '')}`)
  
}, [category])

const handleSubmit =(e)=>{
  e.preventDefault();
   dispatch(termChange(stateTerm))
   setStateTerm('')
  setPlaceholder(`Search ${category.replace('r/', '')} or press Enter`)

}

  return (
    <div id="search-container">
      <form className="search" onSubmit={handleSubmit}>
        <input aria-label="Search posts" 
        id="search" type="search" 
        placeholder={placeholder}
        value ={stateTerm}
        onChange={handleOnChange}
        />  
      </form>   
    </div>
  )
}

export default SearchBar



