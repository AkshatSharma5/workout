import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { WorkoutsContextProviderFunction } from "./context/WorkoutContext";
import { AuthContextProviderFunction } from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProviderFunction>
      <WorkoutsContextProviderFunction>
        <App />
      </WorkoutsContextProviderFunction>
    </AuthContextProviderFunction>
  </React.StrictMode>
);
