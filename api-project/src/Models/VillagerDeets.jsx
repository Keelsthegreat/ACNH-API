import React from "react";

function VillagerDetails({villager}) {
 
    return(
    <div className="display">
        <h2>{villager.name['name-USen']}</h2>
        <img className="image" src={villager.image_uri} alt= {villager.name['name-USen']}/>
        <h4>Personality: {villager.personality}</h4>
        <h4>Birthday: {villager['birthday-string']}</h4>
        <h4>Species: {villager.species}</h4>
        <h4>Gender: {villager.gender}</h4>
       
     
            
    </div>
    )
}
 export default VillagerDetails ;