import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
// import UserContext from "../../Frontend/src/Context/userContext"
import UserContext from "../src/Context/userContext"
import { Dashboard } from './pages/dashboard';
import { UserProtectedWrapper } from './pages/UserProtectedWrapper';
import { UserLogout } from './pages/UserLogout';
// import { UserContext } from './Context/userContext';
import BinsArea from './Components/BinsArea';
import HomePanel from './pages/HomePanel';
const App = () => {
  return (
    <>
    <UserContext>
    <BrowserRouter>

<Routes>
  /// Here we will create the routes for login and signup
  
   <Route path="/login" element={<Login />} />
  {/* <Route path="/signup" element={<Signup />} /> */}
  <Route path="/" element={<LandingPage />} />
  <Route path="/dashboard/*" element={<UserProtectedWrapper>
    <HomePanel />
  </UserProtectedWrapper>}/>
 
  <Route path='/ulb/logout' element={ <UserProtectedWrapper>
    <UserLogout />
  </UserProtectedWrapper>}/>
</Routes>
</BrowserRouter>

    </UserContext>
    
  
    </>
  )
}
export default App;
