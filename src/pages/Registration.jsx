import React,{useState} from "react";
import './style.css'

export default function Registration() {

  const [formData,setFormData] = useState({
    name:"",
    email:"",
    username:"",
    password:"",
    contact:"",
    location:""
  })

  const handleChange=(e)=>{

    const {name,value} = e.target

    setFormData({
      ...formData,
      [name]:value
    })

  }

  const handleSubmit=(e)=>{

    e.preventDefault()

    const users = JSON.parse(localStorage.getItem("users")) || []

    const newUser={
      ...formData,
      id:Math.floor(Math.random()*100000)
    }

    users.push(newUser)

    localStorage.setItem("users",JSON.stringify(users))

    alert("Registration Successful")

  }

  return (
    <div>

      <h2>Student Registration</h2>

      <form onSubmit={handleSubmit}>

        <label>Name</label>
        <input type="text" name="name" placeholder="Name" onChange={handleChange}/><br></br>

        <label>Email</label>
        <input type="email" name="email" placeholder="Email" onChange={handleChange}/><br></br>

        <label>Username</label>

        <input type="text" name="username" placeholder="Username" onChange={handleChange}/><br></br>

        <label>Password</label>
        <input type="password" name="password" placeholder="Password" onChange={handleChange}/><br></br>
          <label>Contact</label>
        <input type="text" name="contact" placeholder="Contact" onChange={handleChange}/><br></br>

        <label>Location</label>

        <input type="text" name="location" placeholder="Location" onChange={handleChange}/><br></br>

        <button type="submit">Register</button>

      </form>

    </div>
  )
}