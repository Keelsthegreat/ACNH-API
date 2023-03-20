import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Fish() {
  const [fish, setFish] = useState([]);

  useEffect(() => {
    axios.get('https://acnhapi.com/v1a/fish') //api link ^
    
      .then(response => {
        setFish(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
// useEffect allows you to make API request
// passing empty array as the second argument in the useEffect bc the array is used to determine when the effect should run
// if empty only runs once
  return (
    <div>
      <h1>Fish</h1>
      <ul>
        {fish.map(fish => (
          <li key={fish.id}>
            {fish.name['name-USen']}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Fish;  