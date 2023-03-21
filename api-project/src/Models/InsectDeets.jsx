import React from "react";

function InsectDetails({bug}) {
return(
    <div className="display">
        <h2>{bug.name['name-USen']}</h2>
        <img className="image" src={bug.image_url} alt= {bug.name['name-USen']}/>
    </div>
)
}

