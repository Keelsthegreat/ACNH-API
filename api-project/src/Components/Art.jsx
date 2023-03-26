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
      <div className = "banner">
         <img src="https://images-ext-1.discordapp.net/external/TKN48jxMlKCg4MwfCR2HfEEW2YVkO8rCfMxKAq6g8hM/https/static1.thegamerimages.com/wordpress/wp-content/uploads/2020/06/Garden-Museum-via-Reddit.jpg?width=705&height=371" alt="" />

      </div>

      
      
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
        &lsaquo;
      </button>
      <button className="carousel__button--next" onClick={handleNextClick}>
        &rsaquo;
      </button>
      <div className="carousel__indicators">
        {artList.map((art, index) => (
          <button
            className={`carousel__indicator ${
              index === activeIndex ? 'carousel__indicator--active' : ''
            }`}
            key={art.id}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
      {selectedArt && (
        <div>
          <ArtDetails art={selectedArt} />
        </div>
      )}
    </div>
  );
}

export default Art;