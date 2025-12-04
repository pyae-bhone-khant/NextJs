
import {
  Box,

  Button,

  IconButton,
  Typography,
} from "@mui/material"
import Grid from "@mui/material/Grid";

import { useState, useEffect } from "react";

import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { ChangeEvent } from "react";

import InputAdornment from '@mui/material/InputAdornment';
import { db } from '../../../../firebase-config';
import {  collection,  getDocs  , addDoc, updateDoc,  deleteDoc,doc,

} from "firebase/firestore";  

  import {  CollectionReference } from "firebase/firestore";
import Swal from "sweetalert2";

interface Product {
  id: string;
  name: string;
  prize?: string;
  category?: string;
  date?: string;
  density?: number;
}


export default function AddProduct({ closeEvent }: { closeEvent: any }) {  
    const empCollectionRef = collection(db, "products");
      const [rows, setRows] = useState<Product[]>([]);
    
  const getUsers = async () => {
      const data = await getDocs(empCollectionRef);
      setRows(
        data.docs.map((doc) => ({
          ...(doc.data() as Omit<Product, "id">),
          id: doc.id,
        }))
      );
    };
   
  const currencies = [
  {
    value: 'Mobile',
    label: 'Mobile',
  },
  {
    value: 'Laptop',
    label: 'Laptop',
  },
  {
    value: 'Electronics',
    label: 'Electronics',
  },
  {
    value: 'Food',
    label: 'Food',
  },
];


const [name, setName] = useState<string>("");
const [prize, setPrize] = useState<string>("");
const [category, setCategory] = useState<string>("");

// name
const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
  setName(e.target.value);
};

// prize (convert string → number)
const handlePrizeChange = (e: ChangeEvent<HTMLInputElement>) => {
  setPrize((e.target.value));
};

// category
const handleCategoryChange = (e: ChangeEvent<HTMLInputElement>) => {
  setCategory(e.target.value);
};

  //  const createUser = () => {

  //  } 
   
 

interface CreateUserProps {
  empCollectionRef: CollectionReference;
  name: string;
  price: number | string;
  category: string;
  getUsers: () => void;
  closeEvent: () => void;
}

const createUser = async () => {
  try {
    await addDoc(empCollectionRef, {
      name: name,
      price: Number(prize),
      category: category,
      date: new Date().toISOString(),
    });

    getUsers();
    closeEvent();

    Swal.fire("Submitted!", "Your file has been submitted.", "success");
  } catch (error) {
    console.error("Error adding document:", error);
    Swal.fire("Error", "Failed to submit data.", "error");
  }
};


   
  return (
    <Box sx={{ m: 2  , }}>

      <Typography id="modal-modal-title" variant="h6" component="h2" align="center">
        Add Product
      </Typography>
      <IconButton sx={{ position: "absolute", top: "0", right: "0" }}
        onClick={closeEvent}
        color="error"
      >
        <CloseIcon />
      </IconButton>
      <Box height={20} />
     
      <Grid container spacing={2} justifyContent="center">
  {/* Name */}
  <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
    <TextField
      label="Name"
      variant="outlined"
      size="small"
      onChange={handleNameChange}
      sx={{ width: 500 }} 
      value={name}
    />
  </Grid> 
   
    <Box sx={{display : "flex" ,gap : 1}}> 

  <Grid item xs={6} sx={{ display: "flex", justifyContent: "flex-end" }}>
    <TextField
      label="Price"
      variant="outlined"
      type="number" 
      InputProps={{
    startAdornment: (
      <InputAdornment position="start">
        $
      </InputAdornment>
    ),
  }}
      size="small"
      value={prize}
      onChange={handlePrizeChange}
      sx={{ width: 179}}
    />
  </Grid>

  {/* Category */}
  <Grid item xs={6} sx={{ display: "flex", justifyContent: "flex-start" }}>
    <TextField
      label="Category"
      variant="outlined"
      size="small"
       select
      onChange={handleCategoryChange}
      value={category}
      sx={{ width: 179 }}
    >
      {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
    </TextField>
  {/* Price */}
  </Grid>
    </Box> 
     <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
     <Typography variant="h5" align="center">
       <Button  color="success" variant="contained" onClick={createUser}>Submit</Button>
     </Typography>
  </Grid> 

</Grid>

      
      <Box sx={{ m: 4  , }}>   </Box>
    </Box>
  )
}