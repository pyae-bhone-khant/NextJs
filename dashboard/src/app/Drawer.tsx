"use client";

import * as React from "react";
import { Box, Drawer, IconButton, List, Divider, Button, ListItem, ListItemButton, ListItemText , ListItemIcon } from '@mui/material';
import {

  Home as HomeIcon,
  AbcOutlined as AboutIcon,
  Settings as SettingIcon,

} from "@mui/icons-material"
import MenuIcon from "@mui/icons-material/Menu";
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';


export default function DrawerMenu() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setOpen(open);
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
     

      <Divider />
            
       <List sx={{mt : 10}}>
          <ListItem >
            <ListItemButton href="/pages/home" >

            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>  
            
             
           
            <ListItem >
            <ListItemButton href="/pages/about" >

            <ListItemIcon>
              <AboutIcon />
            </ListItemIcon>
            <ListItemText primary="About" />
            </ListItemButton>
          </ListItem>  
           
           <ListItem >
            <ListItemButton href="/pages/product" >

            <ListItemIcon>
              <AddShoppingCartOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Product" />
            </ListItemButton>
          </ListItem> 
           
            <ListItem >
            <ListItemButton href="/pages/setting/" >

            <ListItemIcon>
              <SettingIcon />
            </ListItemIcon>
            <ListItemText primary="Setting" />
            </ListItemButton>
          </ListItem>
        </List>
    </Box>
  );

  return (
    <>
      {/* Menu Icon */}
      <IconButton onClick={toggleDrawer(true)}>
       <MenuIcon fontSize="large" />
      </IconButton>

      {/* Drawer - Left */}
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </>
  );
}
