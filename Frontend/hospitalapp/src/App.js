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
import ApproveStatusProc from "./components/Protected/ApproveStatusProc";
import Doctorhome from "./components/Protected/Doctorhome";
import Patienthome from "./components/Protected/Patienthome";
import ViewDocForPatientsProc from "./components/Protected/ViewDocForPatientsProc";
import ViewDocProc from "./components/Protected/ViewDocProc";
import ViewPatientsProc from "./components/Protected/ViewPatientsProc";
import ViewPatientsForDoc from "./components/Protected/ViewPatientsForDoc";
import Gallery from "./components/Gallery";
import ViewDoctorForPatient from "./components/ViewDoctorForPatient";
import ViewPatientForDoctor from "./components/ViewPatientForDoctor";
import Adminhome from "./components/Protected/Adminhome";

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/patientregister" element={<PatientRegister />} />
          <Route path="/doctorregister" element={<DoctorRegister />} />
          <Route path="/adminmenu" element={<Adminhome><AdminMenu /></Adminhome>} />
          <Route path="/approvestatus" element={<ApproveStatusProc><ApproveStatus /></ApproveStatusProc>} />
          <Route path="/viewdoctor" element={<ViewDocProc><ViewDoctor/></ViewDocProc>} />
          <Route path="/doctormenu" element={<Doctorhome><DoctorMenu /></Doctorhome>} />
          <Route path="/patientmenu" element={<Patienthome><PatientMenu /></Patienthome>} />
          <Route path="/viewpatient" element={<ViewPatientsProc><ViewPatient/></ViewPatientsProc>} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/viewdoctorforpatient" element={<ViewDocForPatientsProc><ViewDoctorForPatient/></ViewDocForPatientsProc>} />
          <Route path="/viewpatientfordoctor" element={<ViewPatientsForDoc><ViewPatientForDoctor/></ViewPatientsForDoc>} />


        </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;


