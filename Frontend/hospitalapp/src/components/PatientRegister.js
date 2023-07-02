import React, {useState} from "react";
import './PatientRegister.css';
import {Link} from "react-router-dom";


function PatientRegister(){
    var [patient, setPatient] = useState({
       
            
            name: "",
            gender: "",
            dateOfBirth: new Date(),
            phoneNumber: "",
            address: "",
            bloodType: "",
            admissionDate: new Date(),
            dischargeDate: new Date(),
            currentMedications: "",
            symtoms: "",
            
      });
      var registerpatient = () => {
        fetch("http://localhost:5273/api/User/RegisterationForPatient", {
          method: "POST",
          headers: {
            accept: "text/plain",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...patient }),
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
            
            <h1 className="header transbox">Patient Registration Form</h1>
          <form class="row g-3 transbox">
  <div class="col-md-4">
    <label for="validationDefault01" class="form-label">Patient Name</label>
    <input type="text" class="form-control" id="validationDefault01" placeholder="Enter your name"
                onChange={(event) => {
                  setPatient({ ...patient, name: event.target.value });
                }}   required/>
  </div>
  <div class="col-md-3">
    <label for="validationDefault04" class="form-label">Gender</label>
    <select class="form-select" id="validationDefault04" required>
      <option selected disabled value="Select">Select</option>
      <option value="Male" >Male</option>
      <option value="Female">Female</option>
      <option value="Other">Other</option>
    </select>
  </div>
  <div class="col-md-4">
    <label for="validationDefault02" class="form-label">DateOfBirth</label>
    <input type="Date" class="form-control" id="validationDefault02" placeholder="DOB"
                onChange={(event) => {
                  setPatient({ ...patient, dateOfBirth: event.target.value });
                }}   required/>
  </div>
  <div class="col-md-6">
    <label for="validationDefault03" class="form-label">Address</label>
    <input type="text"  class="form-control" id="validationDefault03" placeholder="Enter your address"
                onChange={(event) => {
                  setPatient({ ...patient, address: event.target.value });
                }} required/>
    
  </div>
  <div class="col-md-3">
    <label for="validationDefault05" class="form-label">PhoneNumber</label>
    <input type="text" class="form-control" id="validationDefault05" placeholder="91"
                onChange={(event) => {
                  setPatient({ ...patient, phoneNumber: event.target.value });
                }} required/>
  </div>
  <div class="col-md-3">
    <label for="validationDefault05" class="form-label">BloodType</label>
    <input type="text" class="form-control" id="validationDefault05" 
                onChange={(event) => {
                  setPatient({ ...patient, bloodType: event.target.value });
                }}  required/>
  </div>
  
  <div class="col-md-6">
    <label for="validationDefault03" class="form-label">CurrentMedications</label>
    <input type="text"  class="form-control" id="validationDefault03" 
                onChange={(event) => {
                  setPatient({ ...patient, currentMedications: event.target.value });
                }} required/>
    
  </div>
  <div class="col-md-6">
    <label for="validationDefault03" class="form-label">Symptoms</label>
    <input type="text"  class="form-control" id="validationDefault03" 
                onChange={(event) => {
                  setPatient({ ...patient, symtoms: event.target.value });
                }} required/>
    
  </div>
  <div class="col-md-4">
    <label for="validationDefault02" class="form-label">AddmissionDate</label>
    <input type="Date" class="form-control" id="validationDefault02" 
                onChange={(event) => {
                  setPatient({ ...patient, admissionDate: event.target.value });
                }}  required/>
  </div>
  <div class="col-md-4">
    <label for="validationDefault02" class="form-label">DischargeDate</label>
    <input type="Date" class="form-control" id="validationDefault02" 
                onChange={(event) => {
                  setPatient({ ...patient, dischargeDate: event.target.value });
                }}  required/>
  </div>



  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required/>
      <label class="form-check-label" for="invalidCheck2">
        Agree to terms and conditions
      </label>
    </div>
  </div>
  <div class="col-12">
    <button class="btn btn-primary" type="submit" onClick={registerpatient}>Submit form</button>
  </div>
</form>
        </div>
      );
    }
    export default PatientRegister;
    
