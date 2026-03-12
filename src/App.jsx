import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import AdminLogin from "./pages/AdminLogin";
import AdminHome from "./admin/AdminHome";
import RegisteredStudents from "./admin/RegisteredStudents";
import FetchData from "./admin/FetchData";
import AdminLogout from "./admin/AdminLogout";

function App() {

  const [isAdmin, setIsAdmin] = useState(false)

  // Check initial admin status
  useEffect(()=>{
    const adminStatus = sessionStorage.getItem("isAdmin") === "true"
    setIsAdmin(adminStatus)
  },[])

  return (
     
    <BrowserRouter basename="/react-project1">
    <h1 style={{textAlign:"center"}}> LAB EXAM </h1>

    {isAdmin ? (
      <nav>
        <Link to="/admin/home">Home</Link> | 
        <Link to="/admin/students">Registered Students</Link> | 
        <Link to="/admin/api">Fetch Data</Link> | 
        <Link to="/admin/logout">Logout</Link>
      </nav>
    ) : (
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/registration">Registration</Link> | 
        <Link to="/admin-login">Admin Login</Link>
      </nav>
    )}

    <Routes>
      {/* Main Routes */}
      <Route path="/" element={<Home/>}/>
      <Route path="/registration" element={<Registration/>}/>
      <Route path="/admin-login" element={<AdminLogin/>}/>
      
      {/* Admin Routes */}
      <Route path="/admin/home" element={<AdminHome/>}/>
      <Route path="/admin/students" element={<RegisteredStudents/>}/>
      <Route path="/admin/api" element={<FetchData/>}/>
      <Route path="/admin/logout" element={<AdminLogout/>}/>
    </Routes>

    </BrowserRouter>
  );
}

export default App;