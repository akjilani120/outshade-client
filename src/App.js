

import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './Pages/Navbar/Navbar';
import Login from './Pages/UserLogin/Login';
import Register from './Pages/UserLogin/Register';
import Home from './Pages/Home/Home';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>

      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
       <Route path='/register' element={<Register />} ></Route>
      </Routes>
    </div>
  );
}

export default App;
