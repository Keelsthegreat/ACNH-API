import React from "react";

function FishDetails({fish}) {
    return(
        <div className="display">
            <h2>{fish.name['name-USen']}</h2>
            <img className="image" src= {fish.image_uri} alt ={fish.name['name-USen']}/>
            <dl>
                <dt>Location:</dt>
                <dd>{fish.availability.location}</dd>
                <dd>{fish.availability['month-northern']}</dd>
                <dd>{fish.availability['month-southern']}</dd>
                <dd>{fish.availability.time}</dd>


                <dt>Rarity:</dt>
                <dd>{fish.availability.rarity}</dd>
              
              <dt>Price:</dt>
              <dd>{fish.price} Bells </dd>
              <dd>{fish['price-cj']} Bells from CJ </dd>

              <dt>CatchPhrase:</dt>
              <dd>{fish['catch-phrase']}</dd>

              

            </dl>
        </div>
    )
} 

// <dt></dt> describes the term in the description or definition list. a dt is always followed by a dd. note that multiple dts in a row could indicate several terms that are all defined by the next dd.
// <dd></dd> represents the description definition or value of the dt. 
// note must be used in a <dl></dl>

export default FishDetails ;