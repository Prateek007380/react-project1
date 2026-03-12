import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import './style.css'
import Home from "./Home";
import Registration from "./Registration";
import AdminLogin from "./AdminLogin";

export default function MainNavBar() {

  return (
    <div>

      <nav>

        <Link to="/">Home</Link> | 
        <Link to="/registration">Registration</Link> | 
        <Link to="/admin-login">Admin Login</Link>

      </nav>

      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/registration" element={<Registration/>}/>
        <Route path="/admin-login" element={<AdminLogin/>}/>

      </Routes>

    </div>
  )
}