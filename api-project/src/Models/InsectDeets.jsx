import React from "react";


function InsectDetails({bug}) {
return(
    <div className="display">
        <h2>{bug.name['name-USen']}</h2>
        <img className="image" src={bug.image_uri} alt= {bug.name['name-USen']}/>

        <dl>
            <dt>Location:</dt>
            <dd>{bug.availability.location}</dd>
            <dd>{bug.availability['month-northern']}</dd>
            <dd>{bug.availability['month-southern']}</dd>
            <dd>{bug.availability.time}</dd>

            <dt>Rarity:</dt>
            <dd>{bug.availability.rarity}</dd>

            <dt>Price:</dt>
            <dd>{bug.price} Bells </dd>
            <dd>{bug['price-cj']} Bells </dd>

            <dt>Catch Phrase:</dt>
            <dd>{bug['catch-phrase']}</dd>



        </dl>
    </div>
)
}

// dt describes the term in the description or definition list. a dt is always followed by a dd. note that multiple dts in a row could indicate several items that are all defined by next dd.

// dd represents the desription definiton or value or value of the dt.

// note must be used in a dl tag

export default InsectDetails ;
