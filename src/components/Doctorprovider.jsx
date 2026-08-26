import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import axios from 'axios'

export const DoctorContext=createContext()
function Doctorprovider({children}) {
     const [newdoctor,setNewdoctor]=useState(null)
     async function deldata(id){
         axios.delete(`https://doc-back.onrender.com/doctors/${id}`)
         alert(id,'deleted successfullly')
         setNewdoctor('deleted')
     }
     
     async function upddata(id){
         let data={
             name:'John',
             salary:485485,
             age:34,
             id:Date.now(),
             specialization:'Bones'
         }
         axios.put(`https://doc-back.onrender.com/doctors/${id}`,data)
         alert(id+ "updated")
         setNewdoctor('updated')
     }
  return (
    <DoctorContext.Provider value={{
        newdoctor,setNewdoctor,deldata,upddata
    }} >
        {children}
    </DoctorContext.Provider>
  )
}

export default Doctorprovider