import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FishDetails from '../Models/FishDeets';

function Fish() {
  const [fishList, setFishList] = useState([]);

  const [selectedFish, setSelectedFish] = useState(null)

  useEffect(() => {
    async function fetchData() {
   const response = await axios.get('https://acnhapi.com/v1a/fish')
       //api link ^
       setFishList(Object.values(response.data))
       console.log(fishList)
    }
    fetchData()
    
  
  }, []);

// useEffect allows you to make API request

// passing empty array as the second argument in the useEffect bc the array is used to determine when the effect should run if empty only runs once


function handleClick(fish) {
  setSelectedFish(fish)
}
  return (
    <div className='villagers-grid'>
      <h1>Fish</h1>
      <ul className='grid'>
        {fishList.map((fish)=> (
          <li key={fish.id} onClick = {() =>
          handleClick(fish)}>
            <img className='icon' src={fish.icon_uri} alt={fish.name['name-USen']}/>
            {selectedFish && selectedFish.id === fish.id && (
              <div>
                <FishDetails fish={selectedFish}/>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
// use object.values allows us to transfer API data into an array of fish objects.
// the axios and get request returns an objects corresponding to the IDs so we use object.value to extract just the values of the object which gives us an array.
export default Fish;  