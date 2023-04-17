import React from 'react'
import {Link} from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import './navbar.css'

const navbar = () => {
  return (
  
   
    <div className='navbar'>
        <div className='links'>
         <Link to="/">Shop</Link>
         <Link to="/cart"className='linkcart' >  <FaShoppingCart size= {32}/></Link>
        </div>
    </div>
  
    
  )
}

export default navbar
