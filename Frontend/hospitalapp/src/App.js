import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Login from './components/Login';
import Home from './components/Home';
import DoctorRegister from './components/DoctorRegister';
import AdminMenu from './components/AdminMenu';
import ApproveStatus from "./components/ApproveStatus";
import ViewDoctor from "./components/ViewDoctor";
import ViewPatient from "./components/ViewPatient";
import PatientRegister from "./components/PatientRegister";
import DoctorMenu from "./components/DoctorMenu";
import PatientMenu from "./components/PatientMenu";
import Gallery from "./components/Gallery";
import ViewDoctorForPatient from "./components/ViewDoctorForPatient";
import ViewPatientForDoctor from "./components/ViewPatientForDoctor";

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
          <Route path="/doctormenu" element={<DoctorMenu />} />
          <Route path="/patientmenu" element={<PatientMenu />} />
          <Route path="/viewpatient" element={<ViewPatient/>} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/viewdoctorforpatient" element={<ViewDoctorForPatient/>} />
          <Route path="/viewpatientfordoctor" element={<ViewPatientForDoctor/>} />


        </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;


