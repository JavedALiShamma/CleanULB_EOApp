import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { House, Bell, List, Person, ThreeDots } from "react-bootstrap-icons";
import { useNavigate } from 'react-router-dom';
export const BootomBar = () => {
  
  return (
    <div>
         <nav className="navbar fixed-bottom bg-light border-top">
    <div className="container-fluid d-flex justify-content-around">
      <NavItem id="home" icon={<House size={24} />} />
      <NavItem id="wards" icon={<Bell size={24} />} />
      <NavItem id="bins" icon={<List size={24} />} />
      <NavItem id="profile" icon={<Person size={24} />} />
      <NavItem id="settings" icon={<ThreeDots size={24} />} />
    </div>
  </nav>
    </div>
   
  )
}
function NavItem({ icon, id }) {
  const navigate = useNavigate();
  const handleClick = (e) => {
    
      if(e.target.id === "home"){
        navigate("/dashboard");
      }
      if(e.target.id === "wards"){
        navigate("/wards");
      }
      
  }
    return (
      <button id={id} onClick={handleClick} className="btn btn-light" >
        {icon}
      </button>
    );
  }