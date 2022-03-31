import React from "react"
import { Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from './Components/NavBar'
import UserRegister from "./Components/UserRegister";
import UserLogin from "./Components/UserLogin"

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="auth-wrapper" >
        <Routes>
          <Route path='/register' element={<UserRegister />} />
          <Route path='/login' element={<UserLogin />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
