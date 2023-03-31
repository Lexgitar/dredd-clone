import { useState } from 'react'
import Modal from '../Presentational/Filters/Modal'

function Menu() {
    //toggle modal
const [toggle, setToggle] = useState(false)
const handleClick=()=>{
    toggle ? setToggle(false): setToggle(true)
}

  return (
    <div className='menu' onClick={()=> handleClick()}>
        <i className="fa-solid fa-bars"></i>
        {toggle && <Modal/>}
    </div>
  )
}

export default Menu