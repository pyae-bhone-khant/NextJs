"use client"

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import DrawerMenu from '@/app/Drawer';
import { Badge, Container } from '@mui/material';

import {
    EmailOutlined as EmailIcon,
    NotificationAddOutlined as NotiIcon
} from "@mui/icons-material";
import Productlist from './productlist';

export default function Product() {
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAuth(event.target.checked);
    };

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>

            <AppBar   sx={{ bgcolor : "#ffffff" , color : "#2f2f2f" }} position="static" >
                <Toolbar>
                    <DrawerMenu />
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontSize: 30, ml: 2 }}>
                        Product
                    </Typography>

                    <div>
                        <Box sx={{}}>

                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"

                                color="inherit"
                            >
                                <Badge sx={{}} badgeContent={4} color="error">

                                    <EmailIcon fontSize='large' />
                                </Badge>
                            </IconButton>

                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"

                                color="inherit"
                            >
                                <Badge sx={{}} badgeContent={4} color="error">

                                    <NotiIcon fontSize='large' />
                                </Badge>
                            </IconButton>


                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <AccountCircle fontSize='large' />
                            </IconButton>
                        </Box>


                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>Change Password</MenuItem>
                            <MenuItem onClick={handleClose}>Log Out</MenuItem>
                        </Menu>
                    </div>

                </Toolbar>
            </AppBar>
            {/* Content */} 
            <Box sx={{flexGrow : 1 , p : 5 , height : "100vh",
                 background: "linear-gradient(158deg, rgb(224,224,224) 0%, rgb(233,237,254) 100%)",
            }}>
                <Container  sx={{mt : 8}} maxWidth="xl">
                   
                    <Productlist />
         
                </Container>

            </Box>
            {/* end content */}
        </Box>
    );
}
