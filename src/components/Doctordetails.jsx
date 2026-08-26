import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function Doctordetails() {
  const { id } = useParams()
  const [doctor, setDoctor] = useState()
  useEffect(() => {
    axios.get('https://doc-back.onrender.com/doctors').then(({ data }) => setDoctor(data.find((item) => item.id == id)))
  }, [id])
  return <main className="details-page">{doctor && <section className="details-card">
    <div className="details-avatar">👨‍⚕️</div><p className="eyebrow">DOCTOR PROFILE</p><h1>Dr. {doctor.name}</h1>
    <div className="details-grid"><p><span>Age</span>{doctor.age} years</p><p><span>Specialization</span>{doctor.specialization}</p><p><span>Gender</span>{doctor.gender}</p><p><span>Consultation fee</span>₹{doctor.salary}</p></div>
  </section>}</main>
}
export default Doctordetails
