import React,{useState} from 'react'
import {Box, useMediaQuery} from"@mui/material";
import{Outlet} from "react-router-dom";
import Navbar from "components/Navbar";
import { Provider } from 'react-redux';
import Sidebar from "components/Sidebar";

const Layout = () => {
  const isNonMobile = useMediaQuery("(mis-width:600px)"); //gives true or false with width achieved on screen
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);


  return (
    <Box display ={isNonMobile ?"flex": "block"} width="100%" height="100%">
      <Sidebar isNonMobile ={isNonMobile}
      drawerWidth="250px"
      isSidebarOpen={isSidebarOpen}
      setIsSidebarOpen={setIsSidebarOpen}
      />
      <Box>
        <Navbar />
        <Outlet />
      </Box>
    </Box>
    
  )
}

export default Layout;
