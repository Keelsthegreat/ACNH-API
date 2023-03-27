import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ArtDetails from '../Models/ArtDeets';

function Art() {
  const [artList, setArtList] = useState([]);
  const [selectedArt, setSelectedArt] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

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

  function handlePrevClick() {
    setActiveIndex(activeIndex === 0 ? artList.length - 1 : activeIndex - 1);
  }

  function handleNextClick() {
    setActiveIndex(activeIndex === artList.length - 1 ? 0 : activeIndex + 1);
  }

  useEffect(() => {
    setSelectedArt(artList[activeIndex]);
  }, [activeIndex, artList]);

  return (
    <div className="carousel">
      <div className = "artBanner"></div>

      <h1 className='header'>List of Art</h1>
      <p className='pTag'>Here you will find information of art prices and a description.</p>
      
      <ul className="carousel__slides">
        {artList.map((art, index) => (
          <li
            className={`carousel__slide ${
              index === activeIndex ? 'carousel__slide--active' : ''
            }`}
            key={art.id}
          >
            <img className="carousel__image" src={art.image_uri} alt={art.name['name-USen']} />
          </li>
        ))}
      </ul>
      <button className="carousel__button--prev" onClick={handlePrevClick}>
        {'<'}
      </button>
      <button className="carousel__button--next" onClick={handleNextClick}>
        {'>'}
      </button>
     
      {selectedArt && (
        <div className= "speech_bubble">
          <ArtDetails art={selectedArt} />
        </div>
      )}
    </div>
  );
}

export default Art;