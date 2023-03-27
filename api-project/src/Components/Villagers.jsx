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

    // passing empty array as the second argument in the useEffect bc the array is used to determine when the effect should run & if empty it only runs once 

    function handleClick(villager) {
      setSelectedVillager(villager)

    }
    //setSelectedVillager is used to get individual villagers from the API.
    //When a user clicks on a villager card, the handleClick function is called with the clicked villager as an argument, the handleclick then updates the selectedVillager state with the clicked villager using the setSelectedVillager function.
  return (
    <div>
        <div className='villagerBanner'></div>
        
      <h1 className='header'>Villagers List</h1>
      <p className='pTag'>Here you will find information on the villagers, birthdays, personality types, species and genders</p>
        <br/>
        <br/>
        <br/>
        <br/>
        
        <div className='villagers-grid'>

       {villagerList.map((villager)=> (
         <div className='villager-card' key={villager.id} onClick = {() => handleClick(villager)}>
                <img className='icon' src={villager.icon_uri} alt={villager.name['name-USen']} />
                <p>{villager.name['name-USen']}</p>
                {selectedVillager && selectedVillager.id === villager.id && (
                  <div>
                        <VillagerDetails villager={selectedVillager}/>
                    </div>
                )}
            </div>

))}
</div>
        
    </div>
  )
}
//conditional used for useState selectedVillager
// if selectedVillager === villager.id it will display villager details fetched from API


export default Villagers;