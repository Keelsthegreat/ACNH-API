import React, { useState, useEffect } from 'react'
import axios from 'axios'
import InsectDetails from '../Models/InsectDeets';

function Insects() {
    const [insect, setInsect] = useState ([]);

    useEffect(() => {
        axios.get('http://acnhapi.com/v1a/bugs')
        //api link for insects 

        .then(response => {
            setInsect(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    }, [])
    //useEffect allows you to make API requests
    // passing empty arrays as the second argument in the useEffect because the array is used to determine when the effect should run
    // if empty it only runs once 

  return (
    <div>
        <h1>Insects</h1>
        <ul>
            {insect.map(bugs => (
                <li key={bugs.id}>
                    {bugs.name['name-USen']}
                </li>
            ))}
        </ul>
    </div>
  );
}

export default Insects;