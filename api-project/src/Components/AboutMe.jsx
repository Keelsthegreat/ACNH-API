import React from 'react'

function AboutMe() {
  return (
    <div>
        <div className='aboutBanner'></div>
        <h1 className='header'>About Me</h1>
        <p className='pTagg'>I created this project for my Perscholas assignment. I decided to do it on Animal crossing because I thoroughly enjoy the game. My LinkedIn and Github links are below. My Friend Code is also below if you want to visit my island</p>
        <h2>Github</h2>
        <img className='portfolioImg' src='https://avatars.githubusercontent.com/u/107443714?v=4'/>
        <a href='https://github.com/Keelsthegreat'>Github Link</a>
        <h2>LinkedIn Profile</h2>
        <img className='linkedInPic' src='https://media.licdn.com/dms/image/D5603AQHEiDk6w74gyg/profile-displayphoto-shrink_400_400/0/1675870140417?e=1685577600&v=beta&t=4_nopMfWTN4kT3mqFiX0S9xxmRtPGVB3qAsaCYm9tW0'/>
        <a href='https://www.linkedin.com/in/akili-inniss-778611265/'>LinkedIn</a>
        <h3>Friend Code:</h3>
        <p>SW-8208-9577-2008</p>
    </div>
  )
}

export default AboutMe