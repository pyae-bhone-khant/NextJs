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
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack'; 
import StorefrontTwoToneIcon from '@mui/icons-material/StorefrontTwoTone';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import {
    EmailOutlined as EmailIcon,
    NotificationAddOutlined as NotiIcon
} from "@mui/icons-material"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';




export default function Homepage() {
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

            <AppBar sx={{ bgcolor: "white", color: "black" }} position="static" >
                <Toolbar>
                    <DrawerMenu />
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontSize: 30, ml: 2 }}>
                        Dashboard
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
            <Box sx={{flexGrow : 1 , p : 5}}>
                <Container maxWidth="lg">

            <Grid container spacing={2}>
                <Grid size={8}>
                    <Stack spacing={2} direction="row">

                    <Card sx={{ minWidth: 49 + "%" , height : 140 , 
                          background: "linear-gradient(158deg, rgba(40,34,70,1) 0%, rgba(30,47,141,1) 100%)",

                    }} className='gradient'>
                        <CardContent> 
                            <div>
                                <CreditCardOutlinedIcon sx={{color : "aliceblue"}} />
                            </div>
                            <Typography gutterBottom variant="h5" component="div">
                               $500.00
                            </Typography>
                             <Typography gutterBottom variant="body2" component="div" sx={{color : "#ccd1d1"}}>
                                 Total Earning
                            </Typography>
                            
                        </CardContent>

                    </Card> 
                     
                      <Card sx={{ 
                        minWidth: 49 + "%"  , height : 140 ,
                          background: "linear-gradient(158deg, rgba(53,138,148,1) 0%, rgba(91,180,96,1) 100%)",

                       
                      }} className='gradient'>
                        <CardContent> 
                             <div>
                              <ShoppingCartOutlinedIcon sx={{color : "aliceblue"}} />
                            </div>
                            <Typography gutterBottom variant="h5" component="div">
                                $900.00
                            </Typography>
                             <Typography gutterBottom variant="body2" color='#ccd1d1' component="div">
                              Total Orders 
                            </Typography>
                           
                        </CardContent>

                    </Card>
                    </Stack>
                </Grid> 
                {/* second grid  */}
                <Grid size={4}>
                <Stack spacing={2}  >
                         <Card sx={{ maxWidth: 345 ,
                          background: "linear-gradient(158deg, rgba(53,138,148,1) 0%, rgba(91,180,96,1) 100%)",

                             
                          }}>
                        
                             <Stack spacing={2} sx={{p : 1.5}} direction="row"  >
                             <div className='iconstyle'>
                            <StorefrontTwoToneIcon sx={{color : "aliceblue"}} />
                             </div>
                            <div className='paddingall'> 
                           <span className='pricetitle'>$203k</span>
                           <br />
                           <span className='pricesubtitle'> Total Income</span>
                            </div>                        
                             </Stack>
                     

                    </Card> 
                      <Card sx={{ maxWidth: 345 , 
                          background: "linear-gradient(158deg, rgba(53,138,148,1) 0%, rgba(91,180,96,1) 100%)",

                       }}>
                  
                           
                          <Stack sx={{p : 1.5}} spacing={2} direction="row"  >
                             <div className='iconstyle'>
                            <StorefrontTwoToneIcon sx={{color : "aliceblue"}} />
                             </div>
                            <div className='paddingall'> 
                           <span className='pricetitle'>$203k</span>
                           <br />
                           <span className='pricesubtitle'> Total Income</span>
                            </div>                        
                             </Stack>
                

                    </Card> 
                </Stack>
                </Grid>

            </Grid> 
            <Box  sx={{ mt : 4 }} >

            <Grid container spacing={2}>
                <Grid size={8}> 
                    <Card sx={{height : 60 + "vh"}}>

                    <CardContent>
                            
                        </CardContent>
                    </Card>
                </Grid>
                <Grid size={4}>
                            <Card sx={{height : 60 + "vh"}} >

                    <CardContent>
                            
                        </CardContent> 
                        </Card>
                </Grid>

            </Grid>
            </Box>
                </Container>

            </Box>
            {/* end content */}
        </Box>
    );
}
