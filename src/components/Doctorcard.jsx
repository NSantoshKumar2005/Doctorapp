import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { DoctorContext } from './Doctorprovider'

function Doctorcard({ name, specialization, gender, id }) {
  const { deldata, upddata } = useContext(DoctorContext)
  const navigate = useNavigate()
  return (
    <article className='doctor-card'>
      <div className="doctor-avatar"><img src="https://cdn-icons-png.flaticon.com/512/387/387561.png" alt="Doctor profile" /></div>
      <p className="doctor-specialty">{specialization}</p>
      <h2>Dr. {name}</h2>
      <p className="doctor-gender">{gender}</p>
      <div className="doctor-actions">
        <button className="button-outline" onClick={() => navigate(`/doctordetails/${id}`)}>View profile</button>
        <button className="icon-action" onClick={() => upddata(id)}>Edit</button>
        <button className="icon-action danger" onClick={() => deldata(id)}>Delete</button>
      </div>
    </article>
  )
}

export default Doctorcard
