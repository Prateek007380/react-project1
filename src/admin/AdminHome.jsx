import React, { useEffect } from "react";
import './admin.css'

export default function AdminHome() {

  useEffect(()=>{
    const isAdmin = sessionStorage.getItem("isAdmin") === "true"
    if(!isAdmin){
      window.location.hash = "/admin-login"
    }
  },[])

  return (
    <div>

      <h2>Admin Dashboard</h2>

      <p>Welcome Admin</p>

    </div>
  )
}