import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  const [activeLink, setActiveLink] = useState('');
  const [li1, setli1] = useState('false')
  const [li2, setli2] = useState('false')
  const [li3, setli3] = useState('false')
  const [li4, setli4] = useState('false')
  const [li5, setli5] = useState('false')
  const [li6, setli6] = useState('false')
  const [li7, setli7] = useState('false')
  // UseStates are for different banners on each page

  const handleClick1 = () => {
    setli1(true)
    setli2(false)
    setli3(false)
    setli4(false)
    setli5(false)
    setli6(false)
    setli7(false)
  }

  const handleClick2 = () => {
    setli1(false)
    setli2(true)
    setli3(false)
    setli4(false)
    setli5(false)
    setli6(false)
    setli7(false)
  }

  const handleClick3 = () => {
    setli1(false)
    setli2(false)
    setli3(true)
    setli4(false)
    setli5(false)
    setli6(false)
    setli7(false)
  }

  const handleClick4 = () => {
    setli1(false)
    setli2(false)
    setli3(false)
    setli4(true)
    setli5(false)
    setli6(false)
    setli7(false)
  }

  const handleClick5 = () => {
    setli1(false)
    setli2(false)
    setli3(false)
    setli4(false)
    setli5(true)
    setli6(false)
    setli7(false)
  }

  const handleClick6 = () => {
    setli1(false)
    setli2(false)
    setli3(false)
    setli4(false)
    setli5(false)
    setli6(true)
    setli7(false)
  }

  const handleClick7 = () => {
    setli1(false)
    setli2(false)
    setli3(false)
    setli4(false)
    setli5(false)
    setli6(false)
    setli7(true)
  }




  return (
    <div className='phone-menu'>
      <div className='phone-menu-name'>{activeLink}</div>
      <ul className='phone-menu-list'>
        <li
          className='phone-menu-item home'
          id = {li1 ? 'li1-clicked': ''} 
          onClick = {handleClick1}
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
          id = {li2 ?  'li2-clicked': ''}
          onClick= {handleClick2}
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
          id = {li3 ? 'li3-clicked' : ''}
          onClick = {handleClick3}
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
          id = {li4 ? 'li4-clicked':''}
          onClick = {handleClick4}
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
          id = {li5 ? 'li5-clicked': ''}
          onClick = {handleClick5}
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
          id = {li6 ? 'li6-clicked': ''}
          onClick = {handleClick6}
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
          id = {li7 ? 'li7-clicked': ''}
          onClick = {handleClick7}
          onMouseOver={() => setActiveLink('About Me')}
          onMouseOut={() => setActiveLink('')}
        >
          <Link to='/AboutMe'>
            <img
              src='https://avatars.githubusercontent.com/u/107443714?v=4'
              alt='About Me Icon'
            />
            
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
