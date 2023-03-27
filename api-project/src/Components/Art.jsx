import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ArtDetails from '../Models/ArtDeets';

function Art() {
  const [artList, setArtList] = useState([]);
  const [selectedArt, setSelectedArt] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
//active index keeps track of the current index of the art being displayed 

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('http://acnhapi.com/v1a/art');
      setArtList(Object.values(response.data));
    }
    fetchData();
  }, []);

  function handleClick(art) {
    setSelectedArt(art);
  }
//handleClick function is called with the clicked art as an argument, the handleClick then updates the selectedArt state with the clicked art using the setSelectedArt function

  function handlePrevClick() {
    setActiveIndex(activeIndex === 0 ? artList.length - 1 : activeIndex - 1);
  }

  function handleNextClick() {
    setActiveIndex(activeIndex === artList.length - 1 ? 0 : activeIndex + 1);
  }
 //used to change active index state when user clicks on < > buttons.
  useEffect(() => {
    setSelectedArt(artList[activeIndex]);
  }, [activeIndex, artList]);
  //updates setSelectedArt state with the art item corresponding with the active index

  return (
    <div className="carousel">
      <div className = "artBanner"></div>

      <h1 className='header'>List of Art</h1>
      <p className='pTag'>Here you will find information of art prices and a description.</p>
      
      <ul className="carouselSlides">
        {artList.map((art, index) => (
          <li
            className={`carouselSlide ${
              index === activeIndex ? 'carouselSlide--active' : ''
            }`}
            key={art.id}
          >
            <img className="carouselImage" src={art.image_uri} alt={art.name['name-USen']} />
          </li>
        ))}
      </ul>
      <button className="carouselButton--prev" onClick={handlePrevClick}>
        {'<'}
      </button>
      <button className="carouselButton--next" onClick={handleNextClick}>
        {'>'}
      </button>
     
      {selectedArt && (
          <div className= "speech-bubble">
            
          <ArtDetails art={selectedArt} />
        </div>
        
      )}
      <div className = "blathers">
        <img src="https://media.discordapp.net/attachments/692019678482006016/1089721677149118464/Blathers_NH.png?width=518&height=471" alt="" />
      </div>
    </div>
  );
}

export default Art;