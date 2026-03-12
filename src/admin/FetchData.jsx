import axios from "axios";
import React,{useEffect,useState} from "react";
import './admin.css'

export default function FetchData() {

  const [data,setData] = useState([])
  const [error,setError] = useState("")

  useEffect(()=>{
    const isAdmin = sessionStorage.getItem("isAdmin") === "true"
    if(!isAdmin){
      window.location.hash = "/admin-login"
    }
  },[])

  useEffect(()=>{

    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((response)=>{
      setData(response.data)
    })
  .catch((err)=>{
      setError(err.message)
    })

  },[])

  return (
    <div>

      <h2>Fetch Data</h2>

      {
        error ? <b>{error}</b> :
        data.length==0 ?
        <b>Loading...</b> :

        <table border={1}>

          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>

          {
            data.map((post,index)=>(
              <tr key={index}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
              </tr>
            ))
          }

        </table>
      }

    </div>
  )
}