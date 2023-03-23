import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='phone-menu'>
        <ul className='phone-menu-item'>
            <li><Link to ='/'>Home</Link>
            <img className='img' src=''/> </li>
            <li><Link to ='/Fish'>Fish</Link></li>
            <li><Link to ='/Villagers'>Villagers</Link></li>
        </ul>
    </div>
  )
}

export default NavBar;