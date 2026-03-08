import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SwachhSurvekshanSection.module.css";
import SwachhSurvekshanDashboard from "../assets/icons/SwachhSurvekshanDashboard.png"
const SwachhSurvekshanSection = () => {
    const navigate = useNavigate();
  const handleDashboard =()=>{
    // Here we will navigate the the SwachhSurvekshan Dashboard
    // which is in components/SwachhSurvekshan/SwachhSurvekshanDashboard.jsx
    // For now we will just alert the user
    // use navigate from react-router-dom to navigate to the dashboard
    
    navigate("/SwachhSurvekshan/SwachhSurvekshanDashboard");



  }
  return (
    <section className={`py-5 ${styles.swachhSection}`}>
      <div className="container">
        <div className="row align-items-center">
          
          {/* LEFT CONTENT */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <span className={styles.badge}>Swachh Survekshan 2025–2026</span>

            <h2 className="fw-bold mt-3">
              Smart Monitoring for Cleaner Cities
            </h2>

            <p className="mt-3 text-muted">
              We empower Urban Local Bodies and Municipal Corporations with
              real-time monitoring, evidence-based reporting, and performance
              dashboards aligned with Swachh Survekshan guidelines.
            </p>

            <ul className={`mt-4 ${styles.list}`}>
              <li>✔ Ward & zone-wise cleanliness tracking</li>
              <li>✔ Geo-tagged photo & inspection evidence</li>
              <li>✔ Live dashboards for officials</li>
              <li>✔ Citizen feedback & grievance monitoring</li>
            </ul>

            <div className="mt-4">
              <a onClick={()=>navigate("/dashboard")} className="btn btn-success me-3 ">
                Demo Dashboard
              </a>
              <a onClick={handleDashboard} className="btn btn-outline-success">
                Explore Swachh Survekshan 
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-lg-6 text-center">
            <img
              src={SwachhSurvekshanDashboard}
              alt="Swachh Survekshan Monitoring Dashboard"
              className={`img-fluid ${styles.image}`}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default SwachhSurvekshanSection;
