import React, { useContext } from 'react';
import CustomNavbar from "../Components/TopNavbaar";
import { Routes, Route } from "react-router-dom";
import {Dashboard} from "./dashboard";
import BinsArea from "../Components/BinsArea/index";
import {BootomBar} from "../Components/BootomBar";
import { UserDataContext } from '../Context/userContext';
import Tippers from '../Components/AutoTippers/index';
import WardsCleaning from '../wardsCleaning/index';
const HomePanel = () => {
    const { user } = useContext(UserDataContext);
    console.log(user);
    return (
        <>
        <CustomNavbar/>
        <Routes>
            <Route path="/bins" element={<BinsArea/>}/>
            <Route path="/tippers" element={<Tippers/>}/>
            <Route path="/*" element={<Dashboard/>}/>
            <Route path="/wards" element={<WardsCleaning/>}/>

        </Routes>
        <BootomBar/>
        </>
    )
}   

export default HomePanel;
