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
       {Object.values(fishList).map((fish)=>{
        <div key={fish.id} onClick = {() => handleClick(fish)}>
          <FishDetails fish={fish}/>
        </div>
       })}
     {selectedFish && <FishDetails fish={selectedFish}/>}
    </div>
  );
}
// use object.values allows us to transfer API data into an array of fish objects.
// the axios and get request returns an objects corresponding to the IDs so we use object.value to extract just the values of the object which gives us an array.
export default Fish;  