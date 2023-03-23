import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='phone-menu'>
        <ul className='phone-menu-item'>
            <li><Link to ='/'>Home</Link>
             </li>
            <li><Link to ='/Fish'>Fish</Link>
            <img className='img' src='https://acnhcritterpedia.com/images/ui/fish-transparent.png'/></li>
            <li><Link to ='/Villagers'>Villagers</Link></li>
            <li><Link to ='/Insects'>Insects</Link></li>
        </ul>
    </div>
  )
}

export default NavBar;