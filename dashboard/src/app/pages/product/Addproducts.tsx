
import {
    Box,
    Grid,
    IconButton,
    Typography,
} from "@mui/material"
import { useState, useEffect } from "react";

import CloseIcon from '@mui/icons-material/Close';


export default function AddProduct ({closeEvent  } : {closeEvent : any}) {
    return ( 
        <Box sx={{m : 2}}>

         <Typography id="modal-modal-title" variant="h6" component="h2">
           Add Product
          </Typography> 
          <IconButton sx={{position : "absolute" , top : "0" , right : "0"}} 
          onClick={closeEvent}
            color="error"
           >
            <CloseIcon />
          </IconButton>
          <Grid container spacing={2}></Grid>
          
        </Box>
    )
}