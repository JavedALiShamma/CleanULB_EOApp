import React, { useContext } from 'react';
import { FaArrowCircleRight } from "react-icons/fa";
import { UserDataContext } from '../Context/userContext';
import CustomNavbar from '../Components/TopNavbaar';
import { BootomBar } from '../Components/BootomBar';
import WeeklyColumnChart from '../Components/WeeklyColumnChart';
import autoTipperLogo from "../assets/icons/autoTipperLogo.png"
import CameraCapture from '../Components/CaptureImage';
import { Routes, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import BinsArea from '../Components/BinsArea';
//import Routes
import { Route } from 'react-router-dom';
export const Dashboard = () => {
  const { user } = useContext(UserDataContext);
  const navigate = useNavigate();
  const handleBinsClick = () => {
    navigate({
      pathname: "/dashboard/bins",
    });
  }
  const handleTippersClick = () => {
    navigate({
      pathname: "/dashboard/tippers",
    });
  }
 

  return (
    <div className=''>
    
  
      <div style={{background:"#e7e7e7",fontFamily:`"poppins" , serif`,borderRadius:"0 0 2rem 2rem"}}  className="w-100 p-3">
              <p style={{fontWeight:500}} className="display-3 text-success">Hello, <span style={{fontSize:"1rem"}} className="text-dark">
                Executive Officer
                </span> 
                </p>
              <p className="text-muted">Municipal Council</p>
            </div>
            <div className="w-100 d-flex flex-column gap-1 p-3 ">
           <div className="w-100 d-flex gap-1">

            <div onClick={handleBinsClick} style={{background:"#c9e0dd" ,minHeight:"10rem"}} className="w-50 rounded border position-relative p-2">
                
                  
                    <FaArrowCircleRight  style={{width:"2rem", height:"2rem",bottom:"0.8rem",right:"0.3rem",
                    color:"#4e9c91"
                    }} className="position-absolute"/>
                  
               
                   <h2 className="text-center" style={{fontFamily:`"poppins" , serif`,color:"#4e9c91"}}>All Bins Cleaned</h2>
                   <p style={{fontWeight:"700"}} className="display-1 text-center text-white">56%</p>

            </div>
              
            <div style={{background:"#bec8f9"}} className="w-50 rounded border position-relative p-2">
            <FaArrowCircleRight style={{width:"2rem", height:"2rem",bottom:"0.8rem",right:"0.3rem",
                    color:"#606ca8"
                    }} className="position-absolute"/>
                 <h2 className="text-center" style={{fontFamily:`"poppins" , serif`,color:"#606ca8"}}>Area Cleaned</h2>
                 <p style={{fontWeight:"700"}} className="display-1 text-center text-white"> 50%</p>
            </div>
           </div>
            <div className="w-100 d-flex gap-1">

            <div style={{background:"#dbc77d"}} className="w-50 rounded border position-relative p-2">
            <FaArrowCircleRight style={{width:"2rem", height:"2rem",bottom:"0.8rem",right:"0.3rem",
                    color:"#918146"
                    }} className="position-absolute"/>
                 <h2 className="text-center" style={{fontFamily:`"poppins" , serif`,color:"#918146"}}>
                  Complaints Resolved</h2>
                 <p style={{fontWeight:"700"}} className="display-1 text-center text-white"> 50%</p>
            </div>
            <div style={{background:"#eedbd1"}} className="w-50 rounded border position-relative p-2">
            <FaArrowCircleRight style={{width:"2rem", height:"2rem",bottom:"0.8rem",right:"0.3rem",
                    color:"#ba8c73",
                    }} className="position-absolute"/>
                 <h2 className="text-center" style={{fontFamily:`"poppins" , serif`,color:"#ba8c73"}}>
                  Toilet Cleaned</h2>
                 <p style={{fontWeight:"700"}} className="display-1 text-center text-white"> 100%</p>
            </div>
            </div>
      </div>
      <WeeklyColumnChart/>
      <div style={{height:"20rem"}} className='w-100 p-3'>
      <div style={{background: "linear-gradient(to right,rgba(122, 203, 41, 0.83),rgba(80, 174, 54, 0.75))", color: "white"}} className='w-100 h-100 rounded'>
        <h5 style={{fontFamily:`"poppins" , serif`}} className='text-center text-white py-2'>Locate Auto-Tippers </h5>
          <div className='w-100 d-flex flex-column gap-1 h-75 p-1'>
            <div className='w-100 d-flex h-50 gap-1'>
              <div className='w-50 border h-100 rounded bg-white'>
                <h6 className='text-dark text-center'>Currently Running</h6>
                <div className='w-100 d-flex align-items-center justify-content-center position-relative'>

                <img className='px-3' src={autoTipperLogo} alt="" />
                <div className="spinner-grow text-success position-absolute top-0 left-0" role="status">
                <span className="visually-hidden">Loading...</span>
                </div>
                <h1 style={{fontWeight:"800"}} className='text-center text-success display-1'> 6</h1>
                </div>
              </div>
              <div className='w-50 border h-100 rounded bg-white'>
                <h6 className='text-dark text-center'> Trip Completed</h6>
                <div className='w-100 d-flex align-items-center justify-content-center'>

                <img className='px-3' src={autoTipperLogo} alt="" />
                <h1 style={{fontWeight:"800"}} className='text-center text-danger display-1'> 0</h1>
                </div>
              </div>
            </div>
            <div onClick={handleTippersClick} className='w-100 h-50 bg-white border rounded position-relative'>
              <h6 className='text-center text-dark'>All The Tippers</h6>
              <div className="progress">
            <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: "55%"}} 
             aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">55%</div>
            </div>
              <h2 style={{color:"green"}} className='text-center py-2'>List of all the tippers</h2>
                  <FaArrowCircleRight style={{width:"2rem", height:"2rem",bottom:"0.8rem",right:"0.3rem",
                    color:"green",
                    }} className="position-absolute"/> 
            </div>
          </div>
      
      </div>
      </div>
      {/* <CameraCapture/> */}
      {/* Capture Image Section  */}
           <div  className='w-100 d-flex flex-column align-items-center justify-content-center p-3'>
                    
                    <div style={{background:"#BEC8F9",fontFamily:`"poppins" , serif`}} className='w-100 d-flex flex-column rounded gap-2 p-1'>
                    <h2 style={{color:"#8380B0"}} className='text-center'> Zone wise reports of ULB </h2>
                    <div style={{border:"2px solid white"}} className='w-100 rounded d-flex align-items-center justify-content-center text-white p-2 position-relative'> <h5 className='text-center'>North Zone</h5> <FaArrowCircleRight style={{width:"2rem", height:"2rem",bottom:"0.8rem",right:"0.3rem",
                    color:"white"
                    }} className="position-absolute"/></div>
                    <div style={{border:"2px solid white"}} className='w-100 rounded d-flex align-items-center justify-content-center text-white p-2 position-relative'> <h5 className='text-center'>South Zone</h5> <FaArrowCircleRight style={{width:"2rem", height:"2rem",bottom:"0.8rem",right:"0.3rem",
                    color:"white"
                    }} className="position-absolute"/></div>
                    <div style={{border:"2px solid white"}} className='w-100 rounded d-flex align-items-center justify-content-center text-white p-2 position-relative'> <h5 className='text-center'>East Zone</h5> <FaArrowCircleRight style={{width:"2rem", height:"2rem",bottom:"0.8rem",right:"0.3rem",
                    color:"white"
                    }} className="position-absolute"/></div>
                    <div style={{border:"2px solid white"}} className='w-100 rounded d-flex align-items-center justify-content-center text-white p-2 position-relative'> <h5 className='text-center'>West Zone</h5> <FaArrowCircleRight style={{width:"2rem", height:"2rem",bottom:"0.8rem",right:"0.3rem",
                    color:"white"
                    }} className="position-absolute"/></div>
                   
                    
                    </div>
                   
                    
            </div>   
     
     
      <div style={{height:"15rem"}} className='w-100'> 

      </div>
    </div>


      
  )
}

