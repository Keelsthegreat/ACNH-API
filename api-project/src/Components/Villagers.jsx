import React, { useEffect, useState } from 'react'
import axios from 'axios'
import VillagerDetails from '../Models/VillagerDeets'

function Villagers() {
    const [villagerList, setVillagerList] = useState([]);
    console.log(villagerList)
    const [selectedVillager, setSelectedVillager] = useState(null)

    useEffect(() => {
        async function fetchData() {
            const response =  await axios.get('http://acnhapi.com/v1a/villagers')
            //api link ^
            const townsfolk = Object.values(response.data)
            setVillagerList(townsfolk)
            console.log(response)
        }
        fetchData();
    }, []);
    //useEffect allows you to make API requests

    // passing empty array as the second argument in the useEffect bc the array is used to determine when the effect should run if empty only runs once 

    function handleClick(villager) {
      setSelectedVillager(villager)

    }
    
  return (
    <div>
        <h1>Villagers</h1>
        <ul className='grid'>
         {villagerList.map((villager)=> (
            <li key={villager.id} onClick = {() => handleClick(villager)}>
                <img className='icon' src={villager.icon_uri} alt={villager.name['name-USen']} />
                <p>{villager.name['name-USen']}</p>
                {selectedVillager && selectedVillager.id === villager.id && (
                    <div>
                        {/* <img src= {selectedVillager.image_uri} alt={selectedVillager.name['name-USen']} /> */}
                        <VillagerDetails villager={selectedVillager}/>
                    </div>
                )}
            </li>

         ))}
        </ul>
    
    
    </div>
  )
}

export default Villagers;