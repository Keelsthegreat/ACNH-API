import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FishDetails from '../Models/FishDeets';

function Fish() {
  const [fishList, setFishList] = useState([]);

  const [selectedFish, setSelectedFish] = useState(null)

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('https://acnhapi.com/v1a/fish')
      setFishList(Object.values(response.data))
    }
    fetchData()
  }, []);

  function handleClick(fish) {
    setSelectedFish(fish)
  }

  return (
    <div>
      <div className="fishBanner"></div>
      <h1 className='header'>Fish</h1>
      <h3 className='pTag'> Here You'll find infromation on fish spawn times, seasons,locations, rarity and prices</h3>
      <div className='fish-grid'>
        <ul className='insect-grid'>
          {fishList.map((fish) => (
            <li key={fish.id} onClick={() => handleClick(fish)}>
              <img className='insect-icon' src={fish.icon_uri} alt={fish.name['name-USen']} />
              {selectedFish && selectedFish.id === fish.id && (
                <div>
                  <FishDetails fish={selectedFish} />
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Fish;