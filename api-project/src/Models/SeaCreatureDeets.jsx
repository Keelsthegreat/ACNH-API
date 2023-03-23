import React from 'react'

function SeaCreatureDetails({sc}) {
  return (
    <div className='display'>
      <h2>{sc.name['name-USen']}</h2>
      <img className='image' src={sc.image_uri} alt={sc.name['name-USen']}/>

      <dl>
        <dt>Location:</dt>
        <dd>{sc.availibility.location}</dd>
        <dd>{sc.availibility['month-northern']}</dd>
        <dd>{sc.availibility['month-southern']}</dd>
        <dd>{sc.availibility.time}</dd>

        <dt>Rarity:</dt>
        <dd>{sc.availibility.rarity}</dd>

        <dt>Price:</dt>
        <dd>{sc.price} Bells </dd>
        <dd>{sc['price-cj']} Bells when sold to CJ</dd>

        <dt>CatchPhrase:</dt>
        <dd>{sc['catch-phrase']}</dd>



        </dl> 
    </div>
  )
}

// dt tag describes the term in the description or definition list a dt is always followed by a dd. note that multiple dts in a row could indicate several terms that are all defined by the next dd 

// dd tag represents the description definition or value of the dt 

// must be used in a dl tag (description list )


export default SeaCreatureDetails;


