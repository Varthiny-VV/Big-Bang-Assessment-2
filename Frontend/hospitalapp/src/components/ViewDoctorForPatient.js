import React, { useState, useEffect } from "react";
import PatientMenu from "./PatientMenu";
// import AdminMenu from "./AdminMenu";
// import "./ViewEmployee.css";

function ViewDoctorForPatient() {
  var [active, setData] = useState([]);
  useEffect(() => {
    GetallDoctors();
  }, []);
  const GetallDoctors = () => {
    fetch(
      "http://localhost:5273/api/User/GetDoctors",
      {
        method: "GET",
        headers: {
          accept: "text/plain",
          "Content-Type": "application/json",
          
        },
      }
    )
      .then(async (data) => {
        var myData = await data.json();
        var active = myData.filter(user => user.status== 1)
        console.log(active)
        setData(active);
      })
      .catch((err) => {
        console.log(err.error);
      });
  };
  return (
    <div>
      <PatientMenu />
     
      <h2 id="title">Doctor Details</h2>
      <table class="table">
        <thead>
          <tr>
          <th scope="col">DoctorID</th>
              <th scope="col">Doctor Name</th>
              <th scope="col">Gender</th>
              <th scope="col">Age</th>
              <th scope="col">Email</th>
              <th scope="col">PhoneNumber</th>
              <th scope="col">Speciality</th>
          </tr>
        </thead>
        <tbody>
          
          {active.map((item, index) => (
            <tr key={index}>
              <th>{item.id}</th>
              <td>{item.name}</td>
              <td>{item.gender}</td>
              <td>{item.age}</td>
              <td>{item.email}</td>
              <td>{item.phoneNumber}</td>
              <td>{item.speciality}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default ViewDoctorForPatient;
