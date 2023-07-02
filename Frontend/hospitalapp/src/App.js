import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import PatientRegister from './components/PatientRegister';
import Login from './components/Login';
import Home from './components/Home';
import DoctorRegister from './components/DoctorRegister';
import ApproveStatus from './components/ApproveStatus';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/patientregister" element={<PatientRegister />} />
          <Route path="/doctorregister" element={<DoctorRegister />} />
          <Route path="/changestatus" element={<ApproveStatus />} />

        </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;


