import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Doctordetails() {
  const { id } = useParams();
  const [doctor, setDoctor] = useState();
  // it is used to get the dynamic data from url\
  function fetchdata() {
    let data = [
      {
        id: 1,
        name: "Teja",
        age: 26,
        gender: "Male",
        specialization: "Muscles",
        salary: 7000000,
      },

      {
        id: 2,
        name: "Sam",
        age: 26,
        gender: "Male",
        specialization: "Bones",
        salary: 4000000,
      },

      {
        id: 3,
        name: "Anu",
        age: 25,
        gender: "Female",
        specialization: "Heart",
        salary: 5000000,
      },
    ];

    let doctor = data.find((val) => val.id == id);
    setDoctor(doctor);
  }

  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <div>
      {doctor && (
        <div>
          <h1>Doctor name - {doctor.name}</h1>
          <div>Age - {doctor.age}</div>
          <div>Specialization - {doctor.specialization}</div>
          <div>gender - {doctor.gender}</div>
          <div>salary - {doctor.salary}</div>
        </div>
      )}
    </div>
  );
}

export default Doctordetails;