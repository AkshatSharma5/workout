import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{
        backgroundColor: '#00ADB5'
      }}>
        <FitnessCenterIcon sx={{
          marginX:"8px"
        }}/>
        <Typography
          variant="h5"
          component={Link}
          to="/"
          sx={{
            flexGrow: 1,
            textDecoration: 'none',
            color: '#222831',
            fontFamily: 'Poppins',
            fontWeight: 'bold',
            
          }}
        >
          Workout Buddy!
        </Typography>
        <Button component={Link} to="/form" 
        sx={{
            flexGrow: 1,
            textDecoration: 'none',
            color: '#222831',
            fontFamily: 'Poppins',
            fontWeight: 'bold',
          }}>
          Form
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
