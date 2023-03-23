import React from 'react'
import { Link } from 'react-router-dom'

function NavBar(props) {
  const {handleNavClick} = props
  return (
    <div className='phone-menu'>
        <ul>
            <li className='phone-menu-item'><Link to ='/'>Home</Link>
             </li>
            <li className='phone-menu-item'><Link to ='/Fish'>Fish</Link>
            <img className='img' src='https://acnhcritterpedia.com/images/ui/fish-transparent.png'/></li>
            <li className='phone-menu-item'><Link to ='/Villagers'>Villagers</Link>
            <img src="https://play-lh.googleusercontent.com/Smm7HUG0wUsIDyZTNTJagvFgYczqVVV65-rVXFpmZUJP4x0IsNe-LAhBfgxBp3hkrOc"/></li>
            <li className='phone-menu-item'><Link to ='/Insects'>Insects</Link>
            <img src="https://acnh.co/assets/img/nintendo-switch-acnh-icons/common-bluebottle-icon.png"/></li>
            <li className='phone-menu-item'><Link to = '/SeaCreatures'>Sea Creatures</Link>
            <img src="https://acnhcritterpedia.com/images/ui/deep-transparent.png"/></li>

            <li className='phone-menu-item'><Link to = 'Art'>Art</Link>
            <img src='https://play-lh.googleusercontent.com/wzo3uaa8evJkgaw3sawCZ5UV9uyzOojjKLzkR4rJSZToz20kPuUv9_1Cq4w_lf9LUQ'/></li>
        </ul>
    </div>
  )
}

export default NavBar;