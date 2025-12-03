
import {
    Box,
    Grid,
    IconButton,
    Typography,
} from "@mui/material"
import { useState, useEffect } from "react";

import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';


export default function AddProduct ({closeEvent  } : {closeEvent : any}) {
    return ( 
        <Box sx={{m : 2}}>

         <Typography id="modal-modal-title" variant="h6" component="h2" align="center">
           Add Product
          </Typography> 
          <IconButton sx={{position : "absolute" , top : "0" , right : "0"}} 
          onClick={closeEvent}
            color="error"
           >
            <CloseIcon />
          </IconButton>
          <Box height={20} />    
          <Grid   container spacing={2}>
            <Grid   sx={{display : "flex" , alignItems : "center"}} item  xs ={12}>
               <TextField   sx={{mt : 1 , minWidth : "350px" , }} id="outlined-basic" label="Outlined" variant="outlined"  size="small" />
            </Grid>
          </Grid>
           <Box sx={{m : 4}}>   </Box>
        </Box>
    )
}