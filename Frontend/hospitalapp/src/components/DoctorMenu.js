import React, { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// import "./Menu.css";

function DoctorMenu() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

 
  return (
    <div>
      

      <div class="container-fluid bg-container">
            <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
            <div class="col-md-2 mb-2 mb-md-0">
                <img src={process.env.PUBLIC_URL + '/images/heart_logo.jpg'} alt="" height="50" width="50"></img>
            </div>
            
            <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <li className="nav-item">
                <Link className="nav-link px-2" to="/viewpatientfordoctor">
                  ViewPatient
                </Link>
                </li>  
            </ul>
            <div>
            <button className="btn btn-primary" onClick={logout}>
              Logout
            </button>
          </div>
            </header>
            </div>



    </div>
    
  );
}
export default DoctorMenu;
