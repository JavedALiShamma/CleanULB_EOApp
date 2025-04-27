import React, { useState, useEffect } from "react";
import { GoogleMap, Marker, useLoadScript, Polyline } from "@react-google-maps/api";
import autoTipperLogo from "../../assets/icons/autoTipperLogo.png";
const mapContainerStyle = {
  width: "100%",
  height: "600px",
};

const center = {
  lat: 12.9716, // Default center (example: Bangalore)
  lng: 77.5946,
};

const generateRandomShift = () => (Math.random() - 0.5) * 0.001;

const haversineDistance = (coord1, coord2) => {
  const R = 6371e3; // Radius of Earth in meters
  const toRad = deg => (deg * Math.PI) / 180;

  const lat1 = toRad(coord1.lat);
  const lat2 = toRad(coord2.lat);
  const dLat = toRad(coord2.lat - coord1.lat);
  const dLng = toRad(coord2.lng - coord1.lng);

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c; // Distance in meters
};

const initialVehicles = [
  { id: "V1", color: "red", position: { lat: 12.9716, lng: 77.5946 }, path: [], distance: 0 },
  { id: "V2", color: "blue", position: { lat: 12.9720, lng: 77.5950 }, path: [], distance: 0 },
  { id: "V3", color: "green", position: { lat: 12.9730, lng: 77.5960 }, path: [], distance: 0 },
  { id: "V4", color: "orange", position: { lat: 12.9740, lng: 77.5970 }, path: [], distance: 0 },
];

const VehicleTrackerMap = () => {
  const { isLoaded } = useLoadScript({
    // Remove the S from the API key
    googleMapsApiKey: "AIzaSyCV_KMd361LiXqgpElJRjjTYe5oKtuaG0A",
  });

  const [vehicles, setVehicles] = useState(initialVehicles);

  useEffect(() => {
    const interval = setInterval(() => {
      setVehicles(prevVehicles =>
        prevVehicles.map(vehicle => {
          const newLat = vehicle.position.lat + generateRandomShift();
          const newLng = vehicle.position.lng + generateRandomShift();
          const newPosition = { lat: newLat, lng: newLng };
          const newPath = [...vehicle.path, newPosition];

          const lastPosition = vehicle.position;
          const traveled = haversineDistance(lastPosition, newPosition);

          return {
            ...vehicle,
            position: newPosition,
            path: newPath,
            distance: vehicle.distance + traveled,
          };
        })
      );
    }, 3000); // Update every 3 seconds

    return () => clearInterval(interval);
  }, []);

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <>
    <div>
      <h2 className="text-center p-2 text-success">Vehicle Tracker Dashboard</h2>
      <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={15}>
        {vehicles.map(vehicle => (
          <React.Fragment key={vehicle.id}>
            <Marker icon={autoTipperLogo} position={vehicle.position} label={vehicle.id} />
            <Polyline path={vehicle.path} options={{ strokeColor: vehicle.color }} />
          </React.Fragment>
        ))}
      </GoogleMap>

      <div style={{ marginTop: "20px" }}>
        <h3>Vehicle Distances (Km):</h3>
        <ul className="w-100 p-3 d-flex flex-column gap-2">
          {vehicles.map(v => (
            
                <div key={v.id} className="w-100 rounded border border-dark d-flex align-items-center justify-content-evenly">
                    <img className="w-25" src={autoTipperLogo} alt="" />
                <strong className="w-50 text-wrap"> Vehilce No:RJ10 SA {v.id}</strong>: {(v.distance/1000).toFixed(2)} km
                </div>
              
        
          ))}
        </ul>
      </div>
    </div>
    <div style={{width:"100%",height:"100px",background:"#000"}}></div>
    </>
  );
};

export default VehicleTrackerMap;
