import React from 'react'
import Navbar from './components/Navbar'
import Section from './components/Section'
import './components/styles.css'
import Doctorcard from './components/Doctorcard'
import Addnewdoctor from './components/Addnewdoctor'
import { Route, Routes } from 'react-router-dom'
import Doctordetails from './components/Doctordetails'
// import { useState } from 'react'
// import { useEffect } from 'react'

function App() {
  // const [count,setCount]=useState(0);
  // const [val,setVal]=useState(0)
  // useEffect(()=>{
  //   console.log('request is senting')
  // },[val])
  return (
   <> 
   {/* <br />
   {count}
   <button onClick={()=>setVal(val+1)}>value increment</button>
   <button onClick={()=>setCount(count+1)}>increment</button> */}
   <Navbar/>
   <Routes>
    <Route path='/' element={<Section/>}/>
    <Route path='/adddoctor' element={<Addnewdoctor/>}/>
	<Route path='/doctordetails/:id' element={<Doctordetails/>}/>
   </Routes>
   {/* <Section/> */}
{/* 
   <div className='doctorcontainer'>
   <Doctorcard name='Sivaram' specialization='ortho spl' gender='male'/>
   <Doctorcard name='Teja' specialization='Muscles spl' gender='male'/>
   <Doctorcard name='Vasavi' specialization='Psycho spl' gender='female'/>
   <Doctorcard name='Madhu' specialization='ortho spl' gender='male'/>
   <Doctorcard name='Aditya' specialization='skin spl' gender='male'/>
   <Doctorcard name='John' specialization='Lungs' gender='male'/>
   </div> */}
   {/* <Addnewdoctor/> */}
  </>
  )
}

export default App