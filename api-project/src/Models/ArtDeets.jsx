import React from 'react'

function ArtDetails({art}) {
  return (
    <div className='display'>
      <h2>{art.name['name-USen']}</h2>

      <dl>
        <dt>Price:</dt>
        <dd>{art['buy-price']}</dd>
        <dd>{art['sell-price']}</dd>

      <dt>Museum Description:</dt>
      <dd>{art['museum-desc']}</dd>
      
      </dl>
    </div>
  )
}

// dt describes the term in the description or definition list. a dt is always followed by a dd. note that multiple dts in a row could indicate several terms that are all defined by the next dd.
// dd represents the description definition or value of the dt
// note must be used in a dl tag

export default ArtDetails ;