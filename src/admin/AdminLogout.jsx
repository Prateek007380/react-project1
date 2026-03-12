import React,{useEffect} from "react";
import './admin.css'
import { useNavigate } from "react-router-dom"

export default function AdminLogout() {

  const navigate = useNavigate()

  useEffect(()=>{

    sessionStorage.removeItem("isAdmin")
    navigate("/")

  },[])

  return (
    <div>
      <h2>Logging out...</h2>
    </div>
  )
}