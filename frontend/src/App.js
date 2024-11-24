import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import pages and components
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import WorkoutForm from "./components/workoutForm";
import Test from "./pages/test";
import Shop from "./pages/Shop";
import UserManagement from "./components/UserManagement";
import RoleManagement from "./components/RoleManagement";
import ProtectedRoute from "./components/ProtectedRoute";

// Stripe
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Success from "./components/Success";
import Cancel from "./components/Cancel";
import ForbiddenPage from "./components/403";
import Dashboard from "./components/Dashboard";

function App() {
  // const stripePromise = loadStripe("pk_test_51QHUNWLrQuCWyQsoVxD7r7HPN1SwQDDbkXSSmQ4TcHO2HpmGskgvYVCMHRBGKRFEIclUWPJE8eC3PB2wFKLRPtFT00stN3fEqf");
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          {/* <Elements stripe={stripePromise}> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/403" element={<ForbiddenPage />} />
            <Route path="/form" element={<WorkoutForm />} />
            <Route path="/dashboard" element={<Dashboard />} />

            {/* User Management */}
            <Route path="/user-management" element={<UserManagement />} />

            {/* Role Management */}
            <Route path="/role-management" element={<RoleManagement />} />

            <Route path="/test" element={<Test />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/success" element={<Success />} />
            <Route path="/cancel" element={<Cancel />} />
            <Route
              path="/user-management"
              element={
                <ProtectedRoute roleId="admin" requiredPermission="read">
                  <UserManagement />
                </ProtectedRoute>
              }
            />
            <Route
              path="/role-management"
              element={
                <ProtectedRoute roleId="admin" requiredPermission="read">
                  <RoleManagement />
                </ProtectedRoute>
              }
            />
          </Routes>
          {/* </Elements> */}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
