import React from 'react'
function Doctorcard({name,specialization,gender}) {
  return (
    <div className='card'>
        <div><img width='100' src="https://i.etsystatic.com/32486242/r/il/f73b28/5362741236/il_570xN.5362741236_pq3z.jpg" alt=""/></div>
        <h2>{name}</h2>
        <p>{specialization}</p>
        <p>{gender}</p>
        <button>view details</button>
    </div>
  )
}

export default Doctorcard