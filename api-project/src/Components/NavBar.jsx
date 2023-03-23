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
            <li><Link to ='/Villagers'>Villagers</Link>
            <img src="https://play-lh.googleusercontent.com/Smm7HUG0wUsIDyZTNTJagvFgYczqVVV65-rVXFpmZUJP4x0IsNe-LAhBfgxBp3hkrOc"/></li>
            <li><Link to ='/Insects'>Insects</Link>
            <img src="https://acnh.co/assets/img/nintendo-switch-acnh-icons/common-bluebottle-icon.png"/></li>
            <li><Link to = '/SeaCreatures'>Sea Creatures</Link>
            <img src="https://acnhcritterpedia.com/images/ui/deep-transparent.png"/></li>
        </ul>
    </div>
  )
}

export default NavBar;