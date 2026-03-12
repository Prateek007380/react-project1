import React from "react";
import { Link,Routes,Route } from "react-router-dom";
import './admin.css'
import AdminHome from "./AdminHome";
import RegisteredStudents from "./RegisteredStudents";
import FetchData from "./FetchData";
import AdminLogout from "./AdminLogout";

export default function AdminNavBar() {

  return (
    <div>

      <nav>

        <Link to="/admin/home">Home</Link> | 
        <Link to="/admin/students">Registered Students</Link> | 
        <Link to="/admin/api">Fetch Data</Link> | 
        <Link to="/admin/logout">Logout</Link>

      </nav>

      <Routes>

        <Route path="/admin/home" element={<AdminHome/>}/>
        <Route path="/admin/students" element={<RegisteredStudents/>}/>
        <Route path="/admin/api" element={<FetchData/>}/>
        <Route path="/admin/logout" element={<AdminLogout/>}/>

      </Routes>

    </div>
  )
}