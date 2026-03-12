import React,{useState} from "react";
import './style.css'

export default function AdminLogin() {

  const [formData,setFormData] = useState({
    username:"",
    password:""
  })

  const handleChange=(e)=>{

    const {name,value}=e.target

    setFormData({
      ...formData,
      [name]:value
    })

  }

  const handleSubmit=(e)=>{

    e.preventDefault()

    if(formData.username==="admin" && formData.password==="admin")
    {
      sessionStorage.setItem("isAdmin","true")
      window.location.href="/#/admin/home"
    }
    else
    {
      alert("Invalid Login")
    }

  }

  return (
    <div>

      <h2>Admin Login</h2>

      <form onSubmit={handleSubmit}>

         <label>User Name</label>
        <input type="text" name="username" placeholder="Username" onChange={handleChange}/><br></br>

        <label>Password</label>
        <input type="password" name="password" placeholder="Password" onChange={handleChange}/><br></br>

        <button type="submit">Login</button>

      </form>

    </div>
  )
}