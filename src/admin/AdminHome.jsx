import React, { useEffect } from "react";
import './admin.css'
import { useNavigate } from "react-router-dom"

export default function AdminHome() {
  const navigate = useNavigate()

  useEffect(()=>{
    const isAdmin = sessionStorage.getItem("isAdmin") === "true"
    if(!isAdmin){
      navigate("/admin-login")
    }
  },[])

  return (
    <div>

      <h2>Admin Dashboard</h2>

      <p>Welcome Admin</p>

    </div>
  )
}