import React,{useState,useEffect} from "react";

export default function RegisteredStudents() {

  const [students,setStudents] = useState([])

  useEffect(()=>{
    const isAdmin = sessionStorage.getItem("isAdmin") === "true"
    if(!isAdmin){
      window.location.hash = "/admin-login"
    }
  },[])

  useEffect(()=>{

    const users = JSON.parse(localStorage.getItem("users")) || []

    setStudents(users)

  },[])

  return (
    <div>

      <h2>Registered Students</h2>

      <table border="1">

        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Username</th>
          <th>Contact</th>
          <th>Location</th>
        </tr>

        {
          students.map((student,index)=>(
            <tr key={index}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.username}</td>
              <td>{student.contact}</td>
              <td>{student.location}</td>
            </tr>
          ))
        }

      </table>

    </div>
  )
}