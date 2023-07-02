import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import PatientRegister from './components/PatientRegister';
import Login from './components/Login';
import Home from './components/Home';
import DoctorRegister from './components/DoctorRegister';
import AdminMenu from './components/AdminMenu';
import ApproveStatus from "./components/ApproveStatus";
import ViewDoctor from "./components/ViewDoctors";

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/patientregister" element={<PatientRegister />} />
          <Route path="/doctorregister" element={<DoctorRegister />} />
          <Route path="/adminmenu" element={<AdminMenu />} />
          <Route path="/approvestatus" element={<ApproveStatus />} />
          <Route path="/viewdoctor" element={<ViewDoctor/>} />


        </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;


