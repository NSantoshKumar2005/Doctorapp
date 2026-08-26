import React, { useContext, useState } from 'react'
import Home from './Home'
import axios from 'axios'
import { DoctorContext } from './Doctorprovider'

function Addnewdoctor() {
  const { setNewdoctor } = useContext(DoctorContext)
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')
  const [specialization, setSpecialization] = useState('')
  const [salary, setSalary] = useState('')

  async function handleform(e) {
    e.preventDefault()
    const formdetails = { id: Date.now(), name, age, gender, specialization, salary }
    setNewdoctor(formdetails)
    axios.post('https://doc-back.onrender.com/doctors', formdetails)
    alert('Doctor added successfully')
  }

  return (
    <main className="add-doctor-page">
      <section className="form-panel">
        <p className="eyebrow">DOCTOR DIRECTORY</p>
        <h1>Add a new doctor</h1>
        <p className="form-intro">Add a specialist to make them available for patients.</p>
        <form className='form-container' onSubmit={handleform}>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter doctor name' />
          <input type="text" value={age} onChange={(e) => setAge(e.target.value)} placeholder='Enter age' />
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">Select gender</option><option value="male">Male</option><option value="female">Female</option><option value="others">Other</option>
          </select>
          <input type="text" value={specialization} onChange={(e) => setSpecialization(e.target.value)} placeholder='Enter specialization' />
          <input type="text" value={salary} onChange={(e) => setSalary(e.target.value)} placeholder='Enter consultation fee' />
          <button type='submit'>Save doctor</button>
        </form>
      </section>
      <Home />
    </main>
  )
}

export default Addnewdoctor