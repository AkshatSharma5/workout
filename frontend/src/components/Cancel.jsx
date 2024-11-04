// Cancel.js
import React from 'react';
import { Link } from 'react-router-dom';
import error from "../assets/error.gif"

export default function Cancel() {
  return (
    <div style={styles.container}>
      <img style={styles.icon} color="red" src={error} />
      <h1 style={styles.message}>Payment Failed!</h1>
      <Link to="/" style={{ ...styles.button, backgroundColor: 'red' }}>
        Return to Home
      </Link>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
  },
  icon: {
    fontSize: '5rem',
  },
  message: {
    fontSize: '2rem',
    margin: '20px 0',
  },
  button: {
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    textDecoration: 'none',
    fontSize: '1.2rem',
    marginTop: '20px',
  },
};
