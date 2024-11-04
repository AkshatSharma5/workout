import React from 'react'
import { Link } from "react-router-dom";

export default function Cancel() {
  return (
    <div>
      Cancelled payment!  
      <Link to="/">Return to Home</Link>
 
    </div>
  )
}
