import React, { use, useEffect } from 'react'
import { useContext } from 'react'
import { UserDataContext } from '../Context/userContext'
import { useNavigate } from 'react-router-dom'
export const UserProtectedWrapper = ({children}) => {
    // const { user } = useContext(UserDataContext);
    // instead of depending on the context, we will depend on the local storage
    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    
    useEffect(() => {
        if (!token) {
            navigate("/login");
        }
    }, [token, navigate]);
   
  return (
    // .. Here we will check whether the user is logged in or not
    // If the user is not logged in then we will redirect to the login page 
    <>{children}</>
  )
}
