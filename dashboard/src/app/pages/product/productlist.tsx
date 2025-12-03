"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Typography, Divider , Box, Button, IconButton } from "@mui/material";
import Modal from '@mui/material/Modal';
import Swal from "sweetalert2";
import { db } from "../../../../firebase-config";
import { 
    collection,
     getDocs  ,
      addDoc,
  updateDoc,
  deleteDoc,
  doc,

} from "firebase/firestore"; 
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import  {  Stack } from "@mui/material";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AddProduct from "./Addproducts";

 
 const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

// Define your data interface
interface Product {
  id: string;
  name: string;
  prize?: string;
  category?: string;
  date?: string;
  density?: number;
}

export default function Productlist() { 
      
     const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
     
  const [rows, setRows] = useState<Product[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const empCollectionRef = collection(db, "products");

  // Fetch data from Firestore
  const getUsers = async () => {
    const data = await getDocs(empCollectionRef);
    setRows(
      data.docs.map((doc) => ({
        ...(doc.data() as Omit<Product, "id">),
        id: doc.id,
      }))
    );
  };

  useEffect(() => {
    getUsers();
  }, []);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  }; 
   
   const deleteUser = (id : string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.value) {
        deleteApi(id);
      }
    });
  };
 
    const deleteApi = async (id  : string) => {
    const userDoc = doc(db, "products", id);
    await deleteDoc(userDoc);
    Swal.fire("Deleted!", "Your file has been deleted.", "success");
    getUsers();
  }; 
   
  const filterData = (v : any) => {
    if (v) {
      setRows([v]);
    } else {
        setRows([]);
      getUsers();
    }
  };

  return ( 
    <> 
      
        <div>
     
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AddProduct closeEvent={handleClose} />
        </Box>
      </Modal>
    </div>
      
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <Typography gutterBottom variant="h5" component="div" sx={{ p: 2 }}>
        Products List
      </Typography>
      <Divider /> 
        <Box height={10} />
          <Stack direction="row" spacing={2} className="my-2 mb-2">
            <Autocomplete 
             
              disablePortal
              id="combo-box-demo"
              options={rows}
              sx={{ width: 300  , p : 3 }}
              onChange={(e, v) => filterData(v)}
              getOptionLabel={(rows) => rows.name || ""}
              renderInput={(params) => (
                <TextField {...params} size="small" label="Search Products" />
              )}
            />
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            ></Typography> 
            <IconButton sx={{p: 3}} >

            <Button 
            onClick={handleOpen}
               color="success"  sx={{width : 26 , height : 40 , }} variant="contained" endIcon={<AddCircleIcon />}>
              Add
            </Button>
            </IconButton>
          </Stack>
          <Box height={10} />

      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="products table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ minWidth: 100 }}>Name</TableCell>
              <TableCell sx={{ minWidth: 100 }}>Prize</TableCell>
              <TableCell sx={{ minWidth: 100 }}>Category</TableCell>
              <TableCell sx={{ minWidth: 100 }}>Date</TableCell> 
              <TableCell sx={{ minWidth: 100 }}>Action</TableCell>      
            </TableRow>
          </TableHead>

          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow key={row.id} hover role="checkbox" tabIndex={-1}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.prize || "-"}</TableCell>
                  <TableCell>{row.category || "-"}</TableCell>
                  <TableCell>{row.date || "-"}</TableCell>

                   <TableCell align="left">
                          <Stack spacing={2} direction="row">
                            <EditIcon
                              style={{
                                fontSize: "20px",
                                color: "blue",
                                cursor: "pointer",
                              }}
                              className="cursor-pointer"
                              // onClick={() => editUser(row.id)}
                            />
                            <DeleteIcon
                              style={{
                                fontSize: "20px",
                                color: "darkred",
                                cursor: "pointer",
                              }}
                              onClick={() => {
                                deleteUser(row.id);
                              }}
                            />
                          </Stack>
                        </TableCell>
                     
                     
                     
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </>
  );
}
