import axios from 'axios';
import React, { useEffect, useState } from 'react'

function SeaCreatures() {
    const [seaCreatures, setSeaCreatures] = useState ([]);

    useEffect(() => {
        axios.get('http://acnhapi.com/v1a/sea') //api link ^
       
       
        .then(response =>{
            setSeaCreatures(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    },[]);
    //useEffect allows you to make API requests
    // passing empty arrays as the second argument in the useEffect because the array is used to determine when the effect should run
    //if empty it only runs once

  return (
    <div>
        <h1>Deep Sea Creatures</h1>
        <ul>
            {seaCreatures.map(seaCreatures => (
            <li key={seaCreatures.id}>
                {seaCreatures.name['name-USen']}
            </li>
            ))}
        </ul>
    </div>
  );
}

export default SeaCreatures;