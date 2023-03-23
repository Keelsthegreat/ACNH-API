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
        </dl> 
    </div>
  )
}

export default SeaCreatureDeets