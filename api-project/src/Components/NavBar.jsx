import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  const [activeLink, setActiveLink] = useState('');




  return (
    <div className='phone-menu'>
       
       
      <div className='phone-menu-name'>{activeLink}</div>
      <ul className='phone-menu-list'>
        <li
          className='phone-menu-item home'
         
          onMouseOver={() => setActiveLink('Home')}
          onMouseOut={() => setActiveLink('')}
          >
          <Link to='/'>
            <img
              src='https://cdn.discordapp.com/attachments/692019678482006016/1088544157137641552/houseicon.png'
              alt='Home Icon'
              className='phone-menu-icon'
            />
           
          </Link>
        </li>
        <li
          className='phone-menu-item fish'
         
          onMouseOver={() => setActiveLink('Fish')}
          onMouseOut={() => setActiveLink('')}
        >
          <Link to='/Fish'>
            <img
              src='https://acnhcritterpedia.com/images/ui/fish-transparent.png'
              alt='Fish Icon'
              className='phone-menu-icon'
            />
           
          </Link>
        </li>
        <li
          className='phone-menu-item villagers'
        
          onMouseOver={() => setActiveLink('Villagers')}
          onMouseOut={() => setActiveLink('')}
        >
          <Link to='/Villagers'>
            <img
              src='https://pbs.twimg.com/profile_images/1481028496960884737/0TV2hqEf_400x400.jpg'
              alt='Villagers Icon'
              className='phone-menu-icon'
            />
           
          </Link>
        </li>
        <li
          className='phone-menu-item insects'
         
          onMouseOver={() => setActiveLink('Insects')}
          onMouseOut={() => setActiveLink('')}
        >
          <Link to='/Insects'>
            <img
              src='https://acnh.co/assets/img/nintendo-switch-acnh-icons/common-bluebottle-icon.png'
              alt='Insects Icon'
              className='phone-menu-icon'
            />
           
          </Link>
        </li>
        <li
          className='phone-menu-item sea-creatures'
          
          onMouseOver={() => setActiveLink('Sea Creatures')}
          onMouseOut={() => setActiveLink('')}
        >
          <Link to='/SeaCreatures'>
            <img
              src='https://acnhcritterpedia.com/images/ui/deep-transparent.png'
              alt='Sea Creatures Icon'
              className='phone-menu-icon'
            />
            
          </Link>
        </li>
        <li
          className='phone-menu-item art'
          
          onMouseOver={() => setActiveLink('Art')}
          onMouseOut={() => setActiveLink('')}
        >
          <Link to='/Art'>
            <img
              src='https://cdn.discordapp.com/attachments/692019678482006016/1089639477015740416/Untitled_design_1.png'
              alt='Art Icon'
              className='phone-menu-icon'
            />
           
          </Link>
        </li>
        <li
          className='phone-menu-item about'
          
          onMouseOver={() => setActiveLink('About Me')}
          onMouseOut={() => setActiveLink('')}
        >
          <Link to='/AboutMe'>
            <img className='phone-menu-icon'
              src='https://avatars.githubusercontent.com/u/107443714?v=4'
              alt='About Me Icon'
            />
            
          </Link>
        </li>
        <li className='phone-menu-item map'
            onMouseOver={() => setActiveLink('Map')}
            onMouseOut={() => setActiveLink('')}
        >
            <Link to='/Map'>
        <img  className='phone-menu-icon' src="https://dodo.ac/np/images/e/e9/Menu_Map_NH_Icon.png" alt="" /></Link></li>

        <li className='phone-menu-item rescue'
            onMouseOver={() => setActiveLink('Rescue')}
            onMouseOut={() => setActiveLink('')}
         >
            <Link to='/Rescue'>
        <img className = 'phone-menu-icon' src="https://img.game8.co/3238218/a038ac610fff5d03cf2e5b01046758e5.png/thumb" alt="" /></Link></li>
      </ul>
    </div>

  );
}

export default NavBar;
