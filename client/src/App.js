import React, { useEffect } from "react"
import { Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from './Components/NavBar'
import UserRegister from "./Components/UserRegister";
import UserLogin from "./Components/UserLogin"
import UserProfile from "./Components/UserProfile"
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "./JS/actions/userAction";
import PrivateRoute from "./Components/PrivateRoute";

function App() {

  const dispatch = useDispatch()

  const isAuth = useSelector(state => state.userReducer.isAuth)

  useEffect(() => {
    dispatch(getProfile())
  }, [isAuth])


  return (
    <div className="App">
      <NavBar />
      <div className="auth-wrapper" >
        <Routes>
          <Route path='/register' element={<UserRegister />} />
          <Route path='/login' element={<UserLogin />} />
          <Route path='/profile' element={<PrivateRoute component={UserProfile} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
