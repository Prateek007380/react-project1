import React,{useEffect} from "react";
import './admin.css'

export default function AdminLogout() {

  useEffect(()=>{

    sessionStorage.removeItem("isAdmin")
    window.location.href="/"

  },[])

  return (
    <div>
      <h2>Logging out...</h2>
    </div>
  )
}