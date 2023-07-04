import React, { useState, useEffect } from "react";
import AdminMenu from "./AdminMenu";
// import "./ViewEmployee.css";

function ViewPatient() {
  var [data, setData] = useState([]);
  useEffect(() => {
    GetallPatients();
  }, []);
  const GetallPatients = () => {
    fetch(
      "http://localhost:5273/api/User/GetPatients",
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
        setData(myData);
      })
      .catch((err) => {
        console.log(err.error);
      });
  };
  return (
    <div>
      <AdminMenu/>
      
      <table class="table">
        <thead>
          <tr>
          <th scope="col">Patient ID</th>
              <th scope="col">Name</th>
              <th scope="col">Gender</th>
              <th scope="col">DateOfBirth</th>
              <th scope="col">PhoneNumber</th>
              <th scope="col">BloodType</th>
              <th scope="col">CurrentMedications</th>
              <th scope="col">Symptoms</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <th>{item.id}</th>
              <td>{item.name}</td>
              <td>{item.gender}</td>
              <td>{item.dateOfBirth}</td>
              <td>{item.phoneNumber}</td>
              <td>{item.bloodType}</td>
              <td>{item.currentMedications}</td>
              <td>{item.symptoms}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default ViewPatient;
