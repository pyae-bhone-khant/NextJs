import Image from "next/image";
import styles from "./page.module.css";
import {
  AppBar,
 Box,
 Typography,
} from "@mui/material";
import DrawerMenu from "./Drawer";
import MenuAppBar from "./Appbar";
import Homepage from "./pages/home/page";
export default function Home() {
  return (
    <Box>
      <Homepage />
    </Box>
  );
}
