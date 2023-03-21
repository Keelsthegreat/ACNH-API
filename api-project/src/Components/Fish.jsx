import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FishDetails from '../Models/FishDeets';

function Fish() {
  const [fishList, setFishList] = useState([]);

  const [selectedFish, setSelectedFish] = useState(null)

  useEffect(() => {
    async function fetchData() {
   const response = axios.get('https://acnhapi.com/v1a/fish')
       //api link ^
       setFishList(response.data)
    }
    fetchData()
  
  }, []);
// useEffect allows you to make API request
// passing empty array as the second argument in the useEffect bc the array is used to determine when the effect should run

// if empty only runs once
function handleClick(fish) {
  setSelectedFish(fish)
}
  return (
    <div>
      <h1>Fish</h1>
      <ul>
       {Object.values(fishList)}
      </ul>
    </div>
  );
}

export default Fish;  