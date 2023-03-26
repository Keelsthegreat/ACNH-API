import React, { useState, useEffect } from 'react'
import axios from 'axios'
import InsectDetails from '../Models/InsectDeets';

function Insects() {
    const [insect, setInsect] = useState ([]);

    const [selectedInsect, setSelectedInsect] = useState (null)

    useEffect(() => {
        async function fetchData() {
        const response = await axios.get('http://acnhapi.com/v1a/bugs')
        //api link for bugs^
         setInsect(Object.values(response.data))
         console.log(insect)   
        }
        fetchData()

        }, []);

    //useEffect allows you to make API requests
    // passing empty arrays as the second argument in the useEffect because the array is used to determine when the effect should run
    // if empty it only runs once 

function handleClick(bug) {
    setSelectedInsect(bug)
}

  return (
    <section className = "insects-page">

    <div>
     <h1>Insects</h1>
     <h3> Here You'll find infromation on insects spawn time, seasons,locations, rarity and prices.</h3>
     <ul className = "insect-grid">
        {insect.map((bug)=>(
            <li key={bug.id} onClick = {() =>
                handleClick(bug)}>
                <img className='insect-icon' src={bug.icon_uri} alt={bug.name['name-USen']}/>
                {selectedInsect && selectedInsect.id === bug.id && (
                    <div>
                        <InsectDetails bug={selectedInsect}/>
                    </div>
                )}
            </li>
        ))}
     </ul>
    </div>
</section>
  );
}

export default Insects;