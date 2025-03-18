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
        <div className="flex gap-2">          
        <Link to="/login">
          <button className="px-4 transition-all py-2 rounded-lg text-black text-md underline underline-offset-4 decoration-white hover:decoration-black hover:-translate-y-[0.7vh] font-josefin  hover:text-white font-semibold uppercase">
            Log in
          </button>
        </Link>
        <Link to="/signup">
          <button className="px-4 transition-all py-2 rounded-lg text-black text-md underline underline-offset-4 decoration-white hover:decoration-black hover:-translate-y-[0.7vh] font-josefin  hover:text-white font-semibold uppercase">
            Sign up
          </button>
        </Link>
        <Link to="/shop">
          <button className="bg-white px-3 active:scale-90 transition-all py-1 rounded-lg text-[#00ADB5] text-md font-semibold font-poppins hover:bg-slate-100">
            SHOP NOW! <ShoppingCartIcon />
          </button>
        </Link>
        </div>
        
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
