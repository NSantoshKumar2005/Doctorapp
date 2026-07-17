import React from 'react'
import { useState } from 'react'

function Addnewdoctor() {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')
  const [specialization, setSpecialization] = useState('')
  const [salary, setSalary] = useState('')

  const [newdoctor,setNewdoctor]=useState(null)

  function handleform(e) {
    e.preventDefault()
    let formsdetails = {name, age, gender, specialization, salary}
    setNewdoctor(formdetails)
  }

  return (
    <div className="add-doctor-card">
      <h2><center>Add New Doctor</center></h2>

      <form onSubmit={handleform}>
        <label htmlFor="doctorName">
          Enter doctor name
          <input value={name} onChange={(e) => setName(e.target.value)} type="text" id="doctorName" name="doctorName" placeholder="Enter doctor name" />
        </label>

        <label htmlFor="age">
          Enter age
          <input value={age} onChange={(e) => setAge(e.target.value)} type="number" id="age" name="age" placeholder="Enter age" min="22" max="100" />
        </label>

        <label htmlFor="gender">
          Select gender
          <select value={gender} onChange={(e) => setGender(e.target.value)} id="gender" name="gender">
            <option value="">Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </label>

        <label htmlFor="specialization">
          Enter specialization
          <input value={specialization} onChange={(e) => setSpecialization(e.target.value)} type="text" id="specialization" name="specialization" placeholder="Enter specialization" />
        </label>

        <label htmlFor="salary">
          Enter salary
          <input value={salary} onChange={(e) => setSalary(e.target.value)} type="number" id="salary" name="salary" placeholder="Enter salary" min="0" />
        </label>

        <button type="submit">Add Doctor</button>
      </form>
    </div>
  )
}

export default Addnewdoctor