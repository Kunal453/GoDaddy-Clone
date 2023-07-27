import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css'
// import God1 from './components/Navbar1';
import Navbar1 from './components/Navbar1';
// import Register from './components/Register';
function App() {
  return (
    <div>
      {/* <Navbar1 /> */}
      <Router>
      <Routes>
        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="/login" element={<Login />} />
        <Route exact path="/" element={<Navbar1 />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;