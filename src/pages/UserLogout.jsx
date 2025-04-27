import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
export const UserLogout = () => {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();
   axios.get("http://localhost:8080/ulb/logout", {
        headers:{
            Authorization:`Bearer ${token}`
        }
   }).then((response)=>{
    if(response.status===200){
        alert("Logout successful");
        localStorage.removeItem("token");
        navigate("/login");
    }
   })
  return (
    <div>UserLogout</div>
  )
}
