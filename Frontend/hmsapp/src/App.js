import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import PatientRegister from './components/PatientRegister';
import Login from './components/Login';
import Home from './components/Home';

function App() {
  return (
    <div>
      {/* <PatientRegister></PatientRegister> */}
      {/* <Login></Login> */}
      <Home></Home>
    </div>
  );
}

export default App;
