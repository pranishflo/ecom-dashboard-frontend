import React from 'react';
import { useEffect, useState } from 'react';
import {
    Box,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    useTheme,
    Divider
} from "@mui/material";
import {
    ChevronLeft,
    ChevronRight,
    HomeOutlined,
    ShoppingCartOutlined,
    ReceiptLongOutlined,
    PublicOutlined,
    PointOfSaleOutlined,
    TodayOutlined,
    CalendarViewMonthOutlined,
    PieChartOutlined,
    AdminPanelSettingsOutlined,
    TrendingUpOutlined,
    ChevronRightOutlined,
    SettingsOutlined
} from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import FlexBetween from "./FlexBetween"; // Ensure correct case and path
import profileImage from "../assets/profile.JPG"; // Ensure correct path

const navItems = [
    { text: "Dashboard", icon: <HomeOutlined /> },
    { text: "Client Facing", icon: null },
    { text: "Products", icon: <ShoppingCartOutlined /> },
    { text: "Transaction", icon: <ReceiptLongOutlined /> },
    { text: "Geography", icon: <PublicOutlined /> },
    { text: "Sales", icon: null },
    { text: "Dashboard Overview", icon: <PointOfSaleOutlined /> },
    { text: "Daily", icon: <TodayOutlined /> },
    { text: "Monthly", icon: <CalendarViewMonthOutlined /> },
    { text: "Breakdown", icon: <PieChartOutlined /> },
    { text: "Management", icon: null },
    { text: "Admin", icon: <AdminPanelSettingsOutlined /> },
    { text: "Performance", icon: <TrendingUpOutlined /> },
];

const Sidebar = ({ // component sidebar
    user,
    drawerWidth,
    isSidebarOpen,
    setIsSidebarOpen,
    isNonMobile
    
}) => {
   
    const { pathname } = useLocation();
    const [active, setActive] = useState(""); // use to find current location
    const navigate = useNavigate();
    const theme = useTheme();
    const [userData, setUserData] = useState();

    //puts the "user" into userData
    useEffect(()=>{
        setUserData(user);
        // console.log("User Data: ", userData);
    },[user], []);

    useEffect(() => {
        setActive(pathname.substring(1));
    }, [pathname]);

    return (
        <Box component="nav">
            {isSidebarOpen && (
                <Drawer
                    open={isSidebarOpen}
                    onClose={() => setIsSidebarOpen(false)}
                    variant="persistent"
                    anchor="left"
                    sx={{
                        width: drawerWidth,
                        "& .MuiDrawer-paper": {
                            color: theme.palette.secondary[200],
                            backgroundColor: theme.palette.background.alt,
                            boxSizing: "border-box",
                            borderWidth: isNonMobile ? 0 : "2px",
                            width: drawerWidth
                        }
                    }}
                >
                    <Box width="100%">
                        <Box m="1.5rem 2rem 2rem 3rem">
                            <FlexBetween color={theme.palette.secondary.main}>
                                <Box display="flex" alignItems="center" gap="0.5rem">
                                        <Typography variant="h4" fontWeight="bold">
                                        ECOM DASHBOARD
                                    </Typography>
                                </Box>
                                {!isNonMobile && (
                                    <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                                        <ChevronLeft />
                                    </IconButton>
                                )}
                            </FlexBetween>
                        </Box>
                        <List>
                            {navItems.map(({ text, icon }) => {
                                if (!icon) {
                                    return (
                                        <Typography key={text} sx={{ m: "2.25rem 0 1rem 3rem" }}>
                                            {text}
                                        </Typography>
                                    );
                                }

                                const lcText = text.toLowerCase();
                                return (
                                    <ListItem key={text} disablePadding>
                                        <ListItemButton
                                            onClick={() => {
                                                navigate(`/${lcText}`);
                                                setActive(lcText);
                                            }}
                                            sx={{
                                                backgroundColor: active === lcText ? theme.palette.secondary[300] : "transparent",
                                                color: active === lcText ? theme.palette.primary[600] : theme.palette.secondary[100],
                                            }}
                                        >
                                            <ListItemIcon
                                                sx={{
                                                    ml: "2rem",
                                                    color: active === lcText ? theme.palette.primary[600] : theme.palette.secondary[200],
                                                }}
                                            >
                                                {icon}
                                            </ListItemIcon>
                                            <ListItemText primary={text} />
                                            {active === lcText && (
                                                <ChevronRightOutlined sx={{ ml: "auto" }} />
                                            )}
                                        </ListItemButton>
                                    </ListItem>
                                );
                            })}
                        </List>
                    </Box>

                    <Box position = "absolute" bottom="2rem">
                        <Divider/>
                        <FlexBetween textTransform="none" gap="1rem" m="1rem 2rem 0 3rem">
                           <Box
                           component="img"
                           alt="profile"
                           src={profileImage}
                           height="40px"
                           width= "40px"
                           borderRadius="50%" //50% border rad makes circle
                           sx={{objectFit: "cover"}} //objectfit : it crops image as necassary to fit 
                           />
                            <Box textAlign="Left">
                                <Typography 
                                fontWeight="bold"
                                 fontSize="0.9rem" 
                                 sx={{ color:theme.palette.secondary[100]}}
                                 >
                                    
                                    {user.name}
                                </Typography>
                                <Typography 
                               
                                 fontSize="0.8rem" 
                                 sx={{ color:theme.palette.secondary[200]}}
                                 >
                                    {user.occupation}
                                </Typography>

                            </Box>

                            <SettingsOutlined
                            sx={{color:theme.palette.secondary[300],fontSize:"25px"}}
                            />
                            
                        </FlexBetween>
                    </Box>
                </Drawer>
            )}
        </Box>
    );
};

export default Sidebar;
