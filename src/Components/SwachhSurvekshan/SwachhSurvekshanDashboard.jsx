import React from "react";
import {
  FaMapMarkedAlt,
  FaCamera,
  FaChartLine,
  FaUsers,
  FaFileUpload,
  FaClipboardCheck,
  FaMobileAlt,
  FaSatellite,
} from "react-icons/fa";
import "./SwachhDahsboard.styles.css";
import MagicBento from '../Animation/MagnetBantoAnimation';
const services = [
  {
    icon: <FaMapMarkedAlt size={40} className="text-primary" />,
    title: "Geo-Tagged Field Monitoring",
    desc: "Live tracking of cleanliness status across wards with GPS-enabled inspection.",
  },
  {
    icon: <FaCamera size={40} className="text-success" />,
    title: "Before & After Photo Documentation",
    desc: "Evidence-based documentation aligned with Swachh Survekshan toolkit indicators.",
  },
  {
    icon: <FaChartLine size={40} className="text-warning" />,
    title: "Real-Time Performance Analytics",
    desc: "Section-wise marks tracking with predictive score analysis.",
  },
  {
    icon: <FaUsers size={40} className="text-danger" />,
    title: "Citizen Feedback Monitoring",
    desc: "Grievance redressal tracking & citizen satisfaction analytics.",
  },
  {
    icon: <FaFileUpload size={40} className="text-info" />,
    title: "Indicator-wise Evidence Upload",
    desc: "Upload documents for 50 indicators & 173 sub-indicators digitally.",
  },
  {
    icon: <FaClipboardCheck size={40} className="text-secondary" />,
    title: "Gap Analysis & Improvement Plan",
    desc: "Monthly performance review to achieve maximum marks.",
  },
  {
    icon: <FaMobileAlt size={40} className="text-dark" />,
    title: "Mobile Inspection App",
    desc: "Ward-level monitoring through Android-based inspection system.",
  },
  {
    icon: <FaSatellite size={40} className="text-primary" />,
    title: "Command & Control Dashboard",
    desc: "Centralized monitoring system for Municipal Commissioners.",
  },
];

const SwachhMonitoringServices = () => {
  return (
    <>
    <div className="w-100">
     <h2 className="fw-bold text-success text-center mb-4 mt-4">
            Swachh Survekshan 2025-26 Monitoring Solutions
          </h2>
            <p className="text-muted text-center">
            Empowering Municipalities with Technology-Driven Monitoring
          </p>
    </div>
  
    <div  className="w-100 bg-light d-flex justify-content-center align-items-center position-relative">
        
     <MagicBento 
  textAutoHide={true}
  enableStars
  enableSpotlight
  enableBorderGlow={true}
  enableTilt={false}
  enableMagnetism={false}
  clickEffect
  spotlightRadius={400}
  particleCount={12}
  glowColor="149, 209, 72"
  disableAnimations={false}
/>
    </div>
    <section className="py-5 bg-light">
       
      <div className="container">

        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="fw-bold text-primary">
            Swachh Survekshan 2025-26 Monitoring Solutions
          </h2>
        
        </div>

        {/* Services Grid */}
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-md-6 col-lg-3 mb-4">
              <div className="card h-100 shadow-sm border-0 text-center p-3 service-card">
                <div className="mb-3">{service.icon}</div>
                <h6 className="fw-bold">{service.title}</h6>
                <p className="small text-muted">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="mt-5 p-4 bg-white shadow rounded">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h4 className="fw-bold text-success">
                Why Municipalities Choose Us?
              </h4>
              <ul className="mt-3">
                <li>✔ 100% Toolkit Coverage (10,500 Marks)</li>
                <li>✔ Data-Driven Decision Making</li>
                <li>✔ Ward-Level Monitoring System</li>
                <li>✔ Evidence-Based Documentation</li>
                <li>✔ Dedicated Support Team</li>
              </ul>
            </div>
            <div className="col-md-6 text-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="Monitoring"
                className="img-fluid"
                style={{ maxHeight: "200px" }}
              />
            </div>
          </div>
        </div>

      </div>
    </section>
    </>
  );
};

export default SwachhMonitoringServices;
