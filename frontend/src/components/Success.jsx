import React from 'react'
import { Link } from "react-router-dom";

export default function Success() {
  return (
    <div>
      Successful payment!  
      <Link to="/">Return to Home</Link>
    </div>
  )
}
