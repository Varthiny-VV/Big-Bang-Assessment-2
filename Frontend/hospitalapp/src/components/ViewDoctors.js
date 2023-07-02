import React, { useState, useEffect } from "react";
import PatientMenu from "./PatientMenu";
// import "./ViewEmployee.css";

function ViewDoctor() {
  var [data, setData] = useState([]);
  useEffect(() => {
    GetallDoctors();
  }, []);
  const GetallDoctors = () => {
    fetch(
      "http://localhost:5273/api/User/GetDoctors" +
        localStorage.getItem("id"),
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
      <PatientMenu />
      <h2 id="title">Doctor Details</h2>
      <table class="table">
        <thead>
          <tr>
          <th scope="col">Doctor ID</th>
              <th scope="col">Doctor Name</th>
              <th scope="col">Gender</th>
              <th scope="col">Age</th>
              <th scope="col">Email</th>
              <th scope="col">Speciality</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <th>{item.id}</th>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.gender}</td>
              <td>{item.email}</td>
              <td>{item.phoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default ViewDoctor;
