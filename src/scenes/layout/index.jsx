import React,{useState} from 'react'
import {Box, useMediaQuery} from"@mui/material";
import{Outlet} from "react-router-dom";
import Navbar from "/Users/pranishflo/Desktop/ecom project/client/src/components/Navbar.jsx";
import { Provider } from 'react-redux';
import Sidebar from "components/Sidebar";
import {useSelector} from 'react-redux';
import {useGetUserQuery} from "state/api";
const Layout = () => {
  const isNonMobile = useMediaQuery("(mis-width:600px)"); //gives true or false with width achieved on screen
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const userId= useSelector((state) => state.global.userId);
  const { data } = useGetUserQuery("63701d24f03239c72c00018e");
  // log the data from api
  console.log("data from api: ",data);
  console.log("USer ID", userId);
  
  return (
    <Box display ={isNonMobile ?"flex": "block"} width="100%" height="100%">
      <Sidebar 
      user={data || {}} // || prevents from showing undefine in website else shows an empty object 
      isNonMobile ={isNonMobile}
      drawerWidth="250px"
      isSidebarOpen={isSidebarOpen}
      setIsSidebarOpen={setIsSidebarOpen}
      />
      
      
      <Box>
        <Navbar/>
      
       
        <Outlet />
      </Box>
      </Box>
    
    
  )
}
 

export default Layout;
