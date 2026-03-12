import { HashRouter } from "react-router-dom";
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

  const [isAdmin, setIsAdmin] = useState(null)

  useEffect(()=>{

    const adminStatus = sessionStorage.getItem("isAdmin") === "true"
    setIsAdmin(adminStatus)

  },[])

  // Listen for hash changes to update admin status
  useEffect(()=>{
    const handleHashChange = () => {
      const adminStatus = sessionStorage.getItem("isAdmin") === "true"
      setIsAdmin(adminStatus)
    }

    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
  },[])

  if (isAdmin === null) {
    return <div></div>
  }

  return (
     
    <HashRouter>
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

    </HashRouter>
  );
}

export default App;