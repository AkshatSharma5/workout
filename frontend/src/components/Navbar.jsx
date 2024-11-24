import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          backgroundColor: "#00ADB5",
        }}
      >
        <FitnessCenterIcon
          sx={{
            marginX: "8px",
          }}
        />
        <Typography
          variant="h5"
          component={Link}
          to="/"
          sx={{
            flexGrow: 1,
            textDecoration: "none",
            color: "#222831",
            fontFamily: "Poppins",
            fontWeight: "bold",
          }}
        >
          Workout Buddy!
        </Typography>
        
        <Link to="/dashboard">
          <button className="bg-white px-4 active:scale-75 transition-all py-2 rounded-lg text-[#00ADB5] text-md font-bold font-poppins mr-6">
            DASHBOARD
          </button>
        </Link>
        <Link to="/shop">
          <button className="bg-white px-4 active:scale-75 transition-all py-2 rounded-lg text-[#00ADB5] text-md font-bold font-poppins">
            SHOP NOW! <ShoppingCartIcon />
          </button>
        </Link>

      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
