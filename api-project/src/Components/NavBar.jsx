import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="phone-menu">
      <ul className="phone-menu-list">
        <li className="phone-menu-item home" data-name="Home">
          <Link to="/">
            <img
              src="https://cdn.discordapp.com/attachments/692019678482006016/1088544157137641552/houseicon.png"
              alt="Home Icon"
              className="phone-menu-icon"
            />
            Home
          </Link>
        </li>
        <li className="phone-menu-item fish" data-name="Fish">
          <Link to="/Fish">
            <img
              src="https://acnhcritterpedia.com/images/ui/fish-transparent.png"
              alt="Fish Icon"
              className="phone-menu-icon"
            />
            Fish
          </Link>
        </li>
        <li className="phone-menu-item villagers" data-name="Villagers">
          <Link to="/Villagers">
            <img
              src="https://pbs.twimg.com/profile_images/1481028496960884737/0TV2hqEf_400x400.jpg"
              alt="Villagers Icon"
              className="phone-menu-icon"
            />
            Villagers
          </Link>
        </li>
        <li className="phone-menu-item insects" data-name="Insects">
          <Link to="/Insects">
            <img
              src="https://acnh.co/assets/img/nintendo-switch-acnh-icons/common-bluebottle-icon.png"
              alt="Insects Icon"
              className="phone-menu-icon"
            />
            Insects
          </Link>
        </li>
        <li
          className="phone-menu-item sea-creatures"
          data-name="Sea Creatures"
        >
          <Link to="/SeaCreatures">
            <img
              src="https://acnhcritterpedia.com/images/ui/deep-transparent.png"
              alt="Sea Creatures Icon"
              className="phone-menu-icon"
            />
            Sea Creatures
          </Link>
        </li>
        <li className="phone-menu-item art" data-name="Art">
          <Link to="/Art">
            <img
              src="https://cdn.discordapp.com/attachments/692019678482006016/1089639477015740416/Untitled_design_1.png"
              alt="Art Icon"
              className="phone-menu-icon"
            />
            Art
          </Link>
        </li>
        <li className="phone-menu-item about" data-name="About Me">
          <Link to="/AboutMe">
            <img
              src="https://avatars.githubusercontent.com/u/107443714?v=4"
              alt="About Me Icon"
            />{' '}
            About Me
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
