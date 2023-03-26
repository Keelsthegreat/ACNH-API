import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  
  return (
    <div className='phone-menu'>
        <ul className='phone-menu-list'>
            <li className='phone-menu-item home'>
                <Link to='/'>
                    <img src="https://cdn.discordapp.com/attachments/692019678482006016/1088544157137641552/houseicon.png" alt="Home Icon" className="phone-menu-icon" />
                    Home
                </Link>
            </li>
            <li className='phone-menu-item fish'>
                <Link to='/Fish'>
                    <img src='https://acnhcritterpedia.com/images/ui/fish-transparent.png' alt="Fish Icon" className="phone-menu-icon" />
                    Fish
                </Link>
            </li>
            <li className='phone-menu-item villagers'>
                <Link to='/Villagers'>
                    <img src="https://play-lh.googleusercontent.com/Smm7HUG0wUsIDyZTNTJagvFgYczqVVV65-rVXFpmZUJP4x0IsNe-LAhBfgxBp3hkrOc" alt="Villagers Icon" className="phone-menu-icon" />
                    Villagers
                </Link>
            </li>
            <li className='phone-menu-item insects'>
                <Link to='/Insects'>
                    <img src="https://acnh.co/assets/img/nintendo-switch-acnh-icons/common-bluebottle-icon.png" alt="Insects Icon" className="phone-menu-icon" />
                    Insects
                </Link>
            </li>
            <li className='phone-menu-item sea-creatures'>
                <Link to='/SeaCreatures'>
                    <img src="https://acnhcritterpedia.com/images/ui/deep-transparent.png" alt="Sea Creatures Icon" className="phone-menu-icon" />
                    Sea Creatures
                </Link>
            </li>
            <li className='phone-menu-item art'>
                <Link to='/Art'>
                    <img src='https://play-lh.googleusercontent.com/wzo3uaa8evJkgaw3sawCZ5UV9uyzOojjKLzkR4rJSZToz20kPuUv9_1Cq4w_lf9LUQ' alt="Art Icon" className="phone-menu-icon" />
                    Art
                </Link>
            </li>
            <li className='phone-menu-item about'>
                About Me
            </li>
        </ul>
    </div>
  )
}

export default NavBar;
