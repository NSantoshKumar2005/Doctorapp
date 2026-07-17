import React from "react";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Doctorcard from "./components/Doctorcard";
import AddNewDoctor from "./components/Addnewdoctor";
import "./components/styles.css";
//import { useState } from 'react'

function App(){
  return (
    <>
    <br />

      <Navbar />
      <Section />
      <div className="doctorcontainer">
        <Doctorcard
          name="Sivaram"
          specialization="Ortho Specialist"
          gender="Male"
        />

        <Doctorcard
          name="Teja"
          specialization="Cardio Specialist"
          gender="Male"
        />

        <Doctorcard
          name="Vasavi"
          specialization="Psychology Specialist"
          gender="Female"
        />

        <Doctorcard
          name="Madhu"
          specialization="Ortho Specialist"
          gender="Male"
        />

        <Doctorcard
          name="Aditya"
          specialization="Skin Specialist"
          gender="Male"
        />

        <Doctorcard
          name="John"
          specialization="Lungs Specialist"
          gender="Male"
        />
      </div>

      {/* Add Doctor Form - Last */}
      <AddNewDoctor />
    </>
  )
}
export default App;