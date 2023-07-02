import React, { useState } from "react";
import './DoctorRegister.css';
import { Link } from "react-router-dom";

function DoctorRegister() {
  var [doctor, setDoctor] = useState({
    name: "",
    gender: "",
    age: "",
    email: "",
    phoneNumber: "",
    speciality: "",
    experience: "",
    consultationFee: 0,
    status: true
  });

  var registerDoctor = () => {
    fetch("http://localhost:5273/api/User/RegisterationForDoctor", {
      method: "POST",
      headers: {
        accept: "text/plain",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...doctor }),
    })
      .then(async (data) => {
        var myData = await data.json();
        console.log(myData);
      })
      .catch((err) => {
        console.log(err.error);
      });
  };

  return (
    <div className="background">
      <h1 className="header transbox">Doctor Registration Form</h1>
      <form class="row g-3 transbox">
        <div class="col-md-4">
          <label for="validationDefault01" class="form-label">Doctor Name</label>
          <input
            type="text"
            class="form-control"
            id="validationDefault01"
            placeholder="Enter doctor's name"
            onChange={(event) => {
              setDoctor({ ...doctor, name: event.target.value });
            }}
            required
          />
        </div>
        <div class="col-md-3">
          <label for="validationDefault04" class="form-label">Gender</label>
          <select
            class="form-select"
            id="validationDefault04"
            required
            onChange={(event) => {
              setDoctor({ ...doctor, gender: event.target.value });
            }}
          >
            <option selected disabled value="Select">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div class="col-md-4">
          <label for="validationDefault02" class="form-label">Age</label>
          <input
            type="text"
            class="form-control"
            id="validationDefault02"
            placeholder="Enter doctor's age"
            onChange={(event) => {
              setDoctor({ ...doctor, age: event.target.value });
            }}
            required
          />
        </div>
        <div class="col-md-6">
          <label for="validationDefault03" class="form-label">Email</label>
          <input
            type="text"
            class="form-control"
            id="validationDefault03"
            placeholder="Enter doctor's email"
            onChange={(event) => {
              setDoctor({ ...doctor, email: event.target.value });
            }}
            required
          />
        </div>
        <div class="col-md-3">
          <label for="validationDefault05" class="form-label">PhoneNumber</label>
          <input
            type="text"
            class="form-control"
            id="validationDefault05"
            placeholder="91"
            onChange={(event) => {
              setDoctor({ ...doctor, phoneNumber: event.target.value });
            }}
            required
          />
        </div>
        <div class="col-md-6">
          <label for="validationDefault06" class="form-label">Speciality</label>
          <input
            type="text"
            class="form-control"
            id="validationDefault06"
            placeholder="Enter doctor's speciality"
            onChange={(event) => {
              setDoctor({ ...doctor, speciality: event.target.value });
            }}
            required
          />
        </div>
        <div class="col-md-6">
          <label for="validationDefault07" class="form-label">Experience</label>
          <input
            type="text"
            class="form-control"
            id="validationDefault07"
            placeholder="Enter doctor's experience"
            onChange={(event) => {
              setDoctor({ ...doctor, experience: event.target.value });
            }}
            required
          />
        </div>
        <div class="col-md-6">
          <label for="validationDefault08" class="form-label">Consultation Fee</label>
          <input
            type="number"
            class="form-control"
            id="validationDefault08"
            placeholder="Enter consultation fee"
            onChange={(event) => {
              setDoctor({ ...doctor, consultationFee: event.target.value });
            }}
            required
          />
        </div>
        <div class="col-12">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
            <label class="form-check-label" for="invalidCheck2">
              Agree to terms and conditions
            </label>
          </div>
        </div>
        <div class="col-12">
          <button class="btn btn-primary" type="submit" onClick={registerDoctor}>
            Submit form
          </button>
        </div>
      </form>
    </div>
  );
}

export default DoctorRegister;
