import React from "react";


function InsectDetails({bug}) {
return(
    <div className="display">
        <h2>{bug.name['name-USen']}</h2>
        <img className="image" src={bug.image_url} alt= {bug.name['name-USen']}/>

        <dl>
            <dt>Location:</dt>
            <dd>{bug.availibility.location}</dd>
            <dd>{bug.availibility.month-northern}</dd>
            <dd>{bug.availibilty.month-southern}</dd>
            <dd>{bug.availibility.time}</dd>

            <dt>Rarity:</dt>
            <dd>{bug.availibility.rarity}</dd>

            <dt>Price:</dt>
            <dd>{bug.price} Bells </dd>
            <dd>{bug.price-cj} Bells </dd>

            <dt>Catch Phrase:</dt>
            <dd>{bug.catch-phrase}</dd>


            
        </dl>
    </div>
)
}

