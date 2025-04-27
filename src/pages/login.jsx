import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { UserDataContext } from "../Context/userContext";
import { useNavigate,Link } from "react-router-dom";
import axios from "axios";


const Login = () => {
    /// Here we save the data from the login page
    const[ulbcode,setUlbcode]=useState("");
    const[password,setPassword]=useState("");
    const {user,setUser} = useContext(UserDataContext);
    const navigate = useNavigate();
    const [userData, setUserData] = useState({});
    const [error, setError] = useState(null);


    const handleLogin = async(e) => {
      e.preventDefault(); // Prevent form submission
    
      const loginData = { ulbcode, password };

      /// Here we get the data and now we will send it to the backend
      // data will be sent to the backend and we will get the response
      
      // const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/ulb/login`,loginData);
      
      const response=await axios.post("http://localhost:8080/ulb/login",loginData).then((response)=>{
       
        if(response.status===200){
          const data=response.data;
        
          setUser(data.ulb);
          // Now we will set the data in the local storage
          localStorage.setItem("token",data.token);
        
          // and we will save in the cookie
          // document.cookie = `user=${JSON.stringify(data.ulb)}; path=/;`;
          navigate("/dashboard");
      }
      
      }).catch((error)=>{
      
  
        if(error.status===400){
       
          setError("Invalid Ulbcode or password");
        }
        if(error.status===404){
          alert("User not found");
          setError("User not found");
        }
        if(error.status===500){
          alert("Server error");
          setError("Server error");
        }
        // Handle error (e.g., show an error message to the user)
      });
      
     
  }
  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: "#f4f4f4" }}>
      <div className="card shadow-lg p-4" style={{ width: "350px", borderRadius: "15px" }}>
        <h3 className="text-center mb-4" style={{ color: "#7BCB29" }}>Login</h3>
        {error && <p className="text-danger text-center">{error}</p>}
        <form >
          <div className="mb-3">
            <label htmlFor="ulbcode" className="form-label">ULB Code</label>
            <input type="number" className="form-control" name="ulbcode" id="ulbcode" placeholder="Enter your email" 
            onChange={(e)=>setUlbcode(e.target.value)}
            value={ulbcode} required />
            
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" name="password" id="password" placeholder="Enter your password"
            onChange={(e)=>setPassword(e.target.value)} value={password} required />
          </div>
          <button onClick={handleLogin} type="submit" className="btn w-100" style={{ backgroundColor: "#7BCB29", color: "#fff" }}>Login</button>
        </form>
        <p className="text-center mt-3">
          <a href="#" className="text-decoration-none" style={{ color: "#7BCB29" }}>Forgot password?</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
