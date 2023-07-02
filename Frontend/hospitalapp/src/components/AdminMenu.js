import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Menu.css";

function AdminMenu() {
  const navigate = useNavigate();
  var logout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <h2 className="navbar-brand">VV Health Care</h2>
        <div className="collapse navbar-collapse Menu" id="navbarNav">
          <div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/viewdoctor">
                  ViewDoctor
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/viewpatient">
                  ViewPatient
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/approvestatus">
                  ApproveStatus
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <button onClick={logout}>Logout</button>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default AdminMenu;
