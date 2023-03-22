import React from "react";

function VillagerDetails({villager}) {
    return(
    <div className="display">
        <h2>{villager.name['name-USen']}</h2>
        <img className="image" src={villager.image_uri} alt= {villager.name['name-USen']}/>
    </div>
    )
}