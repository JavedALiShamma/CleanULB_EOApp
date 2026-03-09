/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf, faRecycle, faCity } from "@fortawesome/free-solid-svg-icons";
import cleanCity from "../assets/icons/cleanCity1.png"
import { UserDataContext } from "../Context/userContext";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import cleanCityLogo from "../assets/icons/cleanCityLogo.jpeg"
import { useNavigate } from "react-router-dom";
// import bins from "../assets/icons/bins.png"
import bins from "../assets/icons/bin.png";
import recycleTruck from "../assets/icons/recycling-truck.png"
import toilet from "../assets/icons/bathroom.png"
import GD from "../assets/icons/GD.png"
import publicPlace from "../assets/icons/publicPlace.png"
import citizenFeedback from "../assets/icons/citizenFeedback2.png"
import bgImage from "../assets/icons/BgImage.png"
import styles from "./styles.module.css"
// import googleMapLocations from "../assets/icons/googleMapLocations.png"
// import userCharge from "../assets/icons/userCharge.png"
import CardCarousel from "../Components/Swipeable Cards/SwipeCardSection"
import MunicipalityDashboardSection from "../Components/MunicplaityDashbaordSection";
import Footer from "../Components/Footer"; 
import Snowfall from 'react-snowfall';
import SwachhSurvekshanSection from "../Components/SwachhSurvekshanSection";

const LandingPage = () => {
  // useContext(UserDataContext);
  const navigate = useNavigate();
  return (
    //51AE36 // 7BCB29
    <div className="">
      <Snowfall/>
      {/* <Snowfall
      // Changes the snowflake color
        color="green"
      // Applied to the canvas element
        // style={{ background: '#fff' }}
      // Controls the number of snowflakes that are created (default 150)
        snowflakeCount={200}
        /> */}
       <div className="landing-page" style={{ background: "linear-gradient(to right,rgba(122, 203, 41, 0.83),rgba(80, 174, 54, 0.75))", color: "white" }}>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={{ backgroundColor: "white" ,color:"black"}}>
        <div className="container">
          <img style={{width:"4rem",height:"4rem"}} src={cleanCityLogo} alt="" />
          <a style={{fontFamily:"'Poppins', sans-serif"}} className="navbar-brand fw-bold text-success" href="#">Clean ULB</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse text-success" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className={`nav-link ${styles.custom_nav_link}`} onClick={()=>navigate("/")} >Home</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${styles.custom_nav_link}`} onClick={()=>navigate("/")} >Services</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${styles.custom_nav_link}`} onClick={()=>navigate("/contact")} >Contact</a>
              </li>
              <li className="w-100 f-lex justify-content-around align-items-center gap-3">
              
                <a className="btn btn-outline-success me-2" href="login">Login</a>
              
              
                {/* <a onClick={()=>{navigate("/dashboard")}} className="btn btn-warning text-dark" >Sign Up</a> */}
              
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero-section text-center d-flex align-items-center" style={{ padding: "120px 0" }}>
        <div className="container animate__animated animate__fadeIn">
          <h1  className="display-4 fw-bold animate__animated animate__zoomIn">Digital Eye on  <br /> Urban Cleanliness</h1>
          <p style={{fontSize:"1.2rem"}} className="lead animate__animated animate__fadeInUp">Our mission is to enable cleaner, healthier, and more transparent urban environments <br /> by leveraging smart monitoring systems, real-time feedback tools, and IoT-based tracking.</p>
          <div className="email-box animate__animated animate__fadeInUp animate__delay-1s" style={{ maxWidth: "400px", margin: "auto" }}>
            <input type="email" className="form-control mb-2" placeholder="Enter your email address" />
            <button className="btn btn-warning text-dark w-100">Get Connected</button>
          </div>
        </div>
      </header>

      {/* Services Section */}
     
      {/* Our Mission Section */}
      <section id="services" className="py-5 text-center" style={{ background: "#f8f9fa", color: "#333" }}>
        <div style={{fontFamily:"'Poppins', sans-serif"}} className="container">
          <h2 style={{fontFamily:"'Poppins', sans-serif"}} className="fw-bold animate__animated animate__fadeInUp">Our Initiatives for a Cleaner City</h2>
          <p className="text-muted animate__animated animate__fadeInUp animate__delay-1s">Discover how we are making a difference.</p>
          <div className="row mt-4">
            <div className="col-md-4 col-sm-12 animate__animated animate__zoomIn animate__delay-2s">
              {/* <FontAwesomeIcon icon={faLeaf} size="4x" style={{ color: "#28a745" }} /> */}
              <img style={{width:"5rem",height:"5rem"}} src={recycleTruck} alt="" />
              <h4 style={{ color: "green" }}>IoT Based Monitoring</h4>
              <p>Iot Based Monitoring of the waste collection vehicles.</p>
            </div>
            <div className="col-md-4 col-sm-12 animate__animated animate__zoomIn animate__delay-3s">
              {/* <FontAwesomeIcon icon={faRecycle} size="4x" style={{ color: "#007bff" }} /> */}
              <img style={{width:"4rem",height:"4rem"}} src={bins} alt="" />
              <h4 style={{ color: "#C0CA33" ,fontFamily:"'Poppins', sans-serif"}}>Monitoring Bins</h4>
              <p>Software based monitoring of bins in the municipality</p>
            </div>
            <div className="col-md-4 col-sm-12 animate__animated animate__zoomIn animate__delay-4s">
              <FontAwesomeIcon icon={faCity} size="4x" style={{ color: "#f39c12" }} />
              <h4 style={{ color: "#f39c12" }}>User charge Collection</h4>
              <p>Collection of user charges from the citizen through mobile app </p>
            </div>
            <div className="m-2"></div>
            <div className="col-md-4 col-sm-12 animate__animated animate__zoomIn animate__delay-4s">
              {/* <FontAwesomeIcon icon={faCity} size="4x" style={{ color: "#f39c12" }} /> */}
              <img style={{width:"5rem",height:"5rem"}} src={toilet} alt="" />
              <h4 style={{ color: "#93b2fa" }}>Toilet Feedback System</h4>
              <p>Feedback system to monitor the working of the toilets.</p>
            </div>
            <div className="col-md-4 col-sm-12 animate__animated animate__zoomIn animate__delay-4s">
              {/* <FontAwesomeIcon icon={faCity} size="4x" style={{ color: "#f39c12" }} /> */}
              <img style={{width:"5rem",height:"5rem"}} src={GD} alt="" />
              <h4 style={{ color: "#52cca3" }}>Grievance Redressal </h4>
              <p>Citizen complaint and redressal system.</p>
            </div>
            <div className="col-md-4 col-sm-12 animate__animated animate__zoomIn animate__delay-4s">
              {/* <FontAwesomeIcon icon={faCity} size="4x" style={{ color: "#f39c12" }} /> */}
              <img style={{width:"5rem",height:"5rem"}} src={publicPlace} alt="" />
              <h4 style={{ color: "#a8dee5" }}>Public Place Monitoring</h4>
              <p>Monitoring of cleanliness of public places through software.</p>
            </div>
            <div className="col-md-4 col-sm-12 animate__animated animate__zoomIn animate__delay-4s">
              {/* <FontAwesomeIcon icon={faCity} size="4x" style={{ color: "#f39c12" }} /> */}
              <img style={{width:"6rem",height:"6rem"}} src={citizenFeedback} alt="Citizen feedback" />
              <h4 style={{ color: "orange" }}>Citizen Feedback</h4>
              <p>Citizen feedback can  be collected for Swachh Survekshan</p>
            </div>
          </div>
        </div>
      </section>
   
      {/* Footer */}
   
    </div>
    <section className="w-100">
      {/* <img className="bg-image w-100" src={bgImage} alt="" />
      <div className="container text-center py-5" style={{ position: "", zIndex: 1 }}>
        <h2 className="text-black fw-bold">Join Us in Making a Difference</h2>
        <p className="text-black">Together, we can create cleaner and healthier urban spaces.</p>
        <a className="btn btn-warning text-dark" href="#contact">Contact Us</a>
        </div> */}
        <SwachhSurvekshanSection/>
        <div className="w-100 position-relative" style={{ overflow: "hidden" ,height:"100vh"}}>
      <img
        src={bgImage}
        alt="Earth Background"
        className="bg-image w-100 h-100 position-absolute"
        style={{ objectFit: "contain", zIndex: -1, opacity:"0.2" }}
      />
      <div className="content text-start">
        <p className="text-center text-primary p-2"> Let's explain what we are doing</p>
        
      </div>
      <div className="w-100 container my-1">
       {/* <div className="row">
        <div className="col-12 col-md-6 col-lg-4 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title text-center">Iot Based Monitoring of the Vehicles </h5>
              <img className="w-100" src={googleMapLocations} alt="" />
              <p className="card-text text-center">We are providing Iot based monitoring of the vehicles to track the location of the vehicles and monitor their working. Urban local body can monitor through the dashboard , and a descriptive reports are sent to the urban local body in the end of the month</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title text-center text-warning">Collection of User charges </h5>
              <img  className="w-100" src={googleMapLocations} alt="" />
              <p className="card-text text-center">We are providing Iot based monitoring of the vehicles to track the location of the vehicles and monitor their working. Urban local body can monitor through the dashboard , and a descriptive reports are sent to the urban local body in the end of the month</p>
            </div>
          </div>
        </div>
       </div> */}
        
        {/* <h2>Hello</h2> */}
        <CardCarousel/>
        <div className="h-50"></div>
      </div>
    </div>
    <MunicipalityDashboardSection/>
    </section>
    {/* <footer className="text-white text-center py-4" style={{ backgroundColor: "#1c1e21" }}>
        <div className="container">
          <p className="mb-0">&copy; 2025 ServiceCo. All rights reserved.</p>
        </div>
      </footer> */}
      <Footer/>

    </div>
   
  );
};

export default LandingPage;
