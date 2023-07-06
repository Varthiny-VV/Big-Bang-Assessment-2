import React from "react";
import { Link, useNavigate } from "react-router-dom";
 import "./Menu.css";

function PatientMenu() {
  const navigate = useNavigate();
  var logout = () => {
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
                <Link className="nav-link px-2" to="/viewdoctorforpatient">
                  ViewDoctor
                </Link>
                </li>
               
            </ul>
            <div class="col-md-3 text-end">
                <button type="button" class="btn btn-outline-dark me-2" onClick={logout}>logout</button>
                </div>
            </header>
    </div>
    </div>
  );
}
export default PatientMenu;
