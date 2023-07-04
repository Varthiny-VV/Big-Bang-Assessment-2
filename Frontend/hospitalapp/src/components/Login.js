import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  var [user, setUser] = useState({
    name: "",
    password: "",
  });
  var login = () => {
    fetch("http://localhost:5273/api/User/Login", {
      method: "POST",
      headers: {
        accept: "text/plain", 
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...user }),
    })
      .then(async (data) => {
        var myData = await data.json();
        localStorage.setItem("name", myData.name);
        localStorage.setItem("role", myData.role);
        localStorage.setItem("token",myData.token);
        
        if (myData.role == "Admin") {
          // localStorage.setItem("managerId", myData.managerID);
          navigate("/adminmenu");
        } else if (myData.role == "Patient") {
          navigate("/patientmenu");
        }
        else if (myData.role == "Doctor") {
          navigate("/doctormenu");
        }
      })
      .catch((err) => {
        console.log(err.error);
      });
  };
  return (
    <div className="App">
      <div className="loginContainer">
        <h1>Welcome Back!</h1>

        <div className="input-container">
          <label>Username </label>
          <input type="text" id="name"
              placeholder="Enter User Name"
              onChange={(event) => {
                setUser({ ...user, name: event.target.value });
              }} required />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" id="password"
              placeholder="PASSWORD"
              onChange={(event) => {
                setUser({ ...user, password: event.target.value });
              }} required />
        </div>
        <div className="register-forget opacity">
        {/* <a href="#">Create a new account</a> */}
        <h6>Create An Account</h6>
        <Link to="/patientregister">Patient</Link>
        <Link to="/doctorregister">Doctor</Link>
        <a href="#">Forgot password?</a>
        
        </div>
        <button className="loginBut" type="submit" onClick={login}>
          <p>Login</p>
        </button>
      </div>
    </div>
  );
}
export default Login;
