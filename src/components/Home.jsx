import React, { useState, useEffect, useMemo } from "react";
import Doctorcard from "./Doctorcard";
import axios from "axios";
import { DoctorContext } from "./Doctorprovider";
import { useContext } from "react";

function Home() {
  const {newdoctor}=useContext(DoctorContext)

  const [doctors, setDoctors] = useState([]);
  const [search, setSearch] = useState("");
  const [specialization, setSpecialization] = useState("");

  async function fetchdata() {
    try{
      let api=await axios.get('https://doc-back.onrender.com/doctors')
    setDoctors(api.data);
    }catch(err){
      console.log(err)
    }
  }


  useEffect(() => {
    fetchdata();
  }, [newdoctor]);

  const filtereddoctors = useMemo(()=>{
    return doctors.filter((val) => {
    console.log('running')
    return (
      val.name.toLowerCase().includes(search.toLowerCase()) &&
      (specialization == "" || val.specialization == specialization)
    );
  });
  },[specialization,doctors,search])
  return (
    <section className="directory-page">
      <div className="directory-heading">
        <p className="eyebrow">SPECIALISTS</p>
        <h1>Find your doctor</h1>
        <p>Browse and manage your healthcare team in one place.</p>
      </div>
      <div className="doctor-filters">
        <input
          type="text"
          placeholder="search doctor name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="text-field"
        />
        <select
          name=""
          value={specialization}
          onChange={(e) => setSpecialization(e.target.value)}
          className="text-field"
        >
          <option value="Bones">Bones</option>
          <option value="Muscles">Muscles</option>
          <option value="Heart">Heart</option>
        </select>
      </div>

      <div className="doctorcontainer">
        {filtereddoctors.length > 0 ? (
          filtereddoctors.map((doctor) => {
            return (
              <Doctorcard
              // deldata={deldata}
              // upddata={upddata}
                name={doctor.name}
                key={doctor.id}
                specialization={doctor.specialization}
                gender={doctor.gender}
                id={doctor.id}
              />
            );
          })
        ) : (
          <h2>no doctors found</h2>
        )}
      </div>
    </section>
  );
}

export default Home;
