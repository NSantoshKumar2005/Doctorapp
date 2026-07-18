import React from 'react'
import { useNavigate } from 'react-router-dom'

function Doctorcard({name,specialization,gender,id}) {
  const navigate=useNavigate()
  return (
    <div className='card'>
        <div><img width='100' src="https://cdn-icons-png.flaticon.com/512/387/387561.png" alt="" /></div>
        <h2>{name}</h2>
        <p>{specialization}</p>
        <p>{gender}</p>
        <button onClick={()=>navigate(`/doctordetails/${id}`)} >view details</button>
    </div>
  )
}

export default Doctorcard