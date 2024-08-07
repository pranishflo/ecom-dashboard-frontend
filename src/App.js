
import { CssBaseline, ThemeProvider, } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { BrowserRouter,Navigate,Routes,Route, Outlet } from "react-router-dom";

import {useMemo } from "react";
import {useSelector}from "react-redux";

import Layout from './scenes/layout';
import Dashboard from "./scenes/dashboard";
import { themeSettings } from "./theme";
import React from 'react';


function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)),[mode]);
  return (
    <div className="app">
      <BrowserRouter>
   <ThemeProvider theme={theme}>
    <CssBaseline />

    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element ={<Navigate to="/dashboard"  replace/>} />
        <Route path ="/dashboard" element={<Dashboard />} />

      </Route>
      
    </Routes>
   </ThemeProvider>
   </BrowserRouter>
    </div>
);
}


export default App;