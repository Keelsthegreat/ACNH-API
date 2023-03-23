import axios from 'axios';
import React, { useEffect, useState } from 'react'
import SeaCreatureDetails from '../Models/SeaCreatureDeets';

function SeaCreatures() {
    const [seaCreaturesList, setSeaCreaturesList] = useState ([]);

    const [selectedSeaCreature, setSelectedSeaCreature] = useState(null) 

    useEffect(() => {
        async function fetchData() {
          const response = await axios.get('http://acnhapi.com/v1a/sea') 
          //api link ^
          setSeaCreaturesList(Object.values(response.data))
          console.log(seaCreaturesList)
        }
        fetchData()

    }, []);
       
    
    //useEffect allows you to make API requests
    // passing empty arrays as the second argument in the useEffect because the array is used to determine when the effect should run
    //if empty it only runs once
    function handleClick(sc) {
        setSelectedSeaCreature(sc)
    }       

  return (
    <div>
        <h1>Deep Sea Creatures</h1>
        <ul>
            {seaCreaturesList.map((sc)=>(
                <li key={sc.id} onClick = {() =>
                handleClick(sc)}>
                    <img className='icon' src={sc.icon_uri} alt= {sc.name['name-USen']}/>
                    {selectedSeaCreature && selectedSeaCreature.id === sc.id && (
                        <div>
                            <SeaCreatureDetails sc={selectedSeaCreature}/>
                        </div>
                    )}
                </li>
            ))}
        </ul>
    </div>
  );
}

export default SeaCreatures;