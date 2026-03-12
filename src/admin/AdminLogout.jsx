import React,{useEffect} from "react";
import './admin.css'

export default function AdminLogout() {

  useEffect(()=>{

    sessionStorage.removeItem("isAdmin")
    // Use hash-based navigation for GitHub Pages compatibility
    window.location.hash = "/"

  },[])

  return (
    <div>
      <h2>Logging out...</h2>
    </div>
  )
}