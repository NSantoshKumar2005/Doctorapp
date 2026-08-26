import React from 'react'
import Navbar from './components/Navbar'
import Section from './components/Section'
import './components/styles.css'
import Doctorcard from './components/Doctorcard'
import Addnewdoctor from './components/Addnewdoctor'
import { Route, Routes } from 'react-router-dom'
import Doctordetails from './components/Doctordetails'
import Weather from './components/Weather'
// import { useEffect } from 'react'

import { useState } from 'react'
import Protectedroute from './components/Protectedroute'
// import useCounter from './components/useCounter'
import Doctorprovider from './components/Doctorprovider'
function App() {
  // 'const [count,setCount]=useState(0);
  // const [val,setVal]=useState(0)
  // useEffect(()=>{
  //   console.log('request is senting')
  // },[val])
  const [login,setLogin]=useState(false)
  // Keep this counter code for future testing.
  // const { count, increment, decrement } = useCounter()
  return (
   <> 
   {/*
   {count}
   <button onClick={increment}>inc</button>
   <button onClick={decrement}>dnc</button>
   */}
   {/* <br />
   {count}
   <button onClick={()=>setCount(count+1)}>increment</button> */}
   <Navbar login={login} setLogin={setLogin}/>
   <Routes>
    <Route path='/' element={<Section/>}/>
    <Route path='/adddoctor' 
    element={<Protectedroute login={login}><Doctorprovider><Addnewdoctor/></Doctorprovider></Protectedroute> }/>
    <Route path='/doctordetails/:id' element={<Doctordetails/>}/>
    <Route path='/weather' element={<Weather/>}/>
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
