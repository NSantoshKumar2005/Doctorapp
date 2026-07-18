import React from 'react'
import { useState } from 'react'
import Home from './Home'
function Addnewdoctor() {
    const [name,setName]=useState('')
    const [age,setAge]=useState('')
    const [gender,setGender]=useState('')
    const [specialization,setSpecialization]=useState('')
    const [salary,setSalary]=useState('')

    const [newdoctor,setNewdoctor]=useState(null)
    function handleform(e){
        e.preventDefault()
        let formdetails={id:Date.now(),name,age,gender,specialization,salary}
        setNewdoctor(formdetails)
        console.log(formdetails)
    }
  return (
    <div>
        <h1>Add New Doctor</h1>
        <form action="" className='form-container' onSubmit={handleform} >
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}  placeholder='Enter Doctor name'/>
            <input type="text" value={age} onChange={(e)=>setAge(e.target.value)}  placeholder='Enter Age'/>
            <select value={gender} onChange={(e)=>setGender(e.target.value)}>
                <option value="">select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">others</option>
            </select>
            <input type="text" value={specialization} onChange={(e)=>setSpecialization(e.target.value)}  placeholder='Enter Specialization'/>
            <input type="text"value={salary} onChange={(e)=>setSalary(e.target.value)}  placeholder='Enter Salary'/>
            <button type='submit'>Add doctor</button>
        </form>
        <Home newdoctor={newdoctor}/>
    </div>
  )
}

export default Addnewdoctor