import { BrowserRouter, Routes, Route } from "react-router-dom";

//import pages and components
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import WorkoutForm from "./components/workoutForm";
import Test from "./pages/test";
import Shop from "./pages/Shop";

//stripe
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Success from "./components/Success";
import Cancel from "./components/Cancel";


function App() {
  // const stripePromise = loadStripe("pk_test_51QHUNWLrQuCWyQsoVxD7r7HPN1SwQDDbkXSSmQ4TcHO2HpmGskgvYVCMHRBGKRFEIclUWPJE8eC3PB2wFKLRPtFT00stN3fEqf");
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          {" "}
          {/*for styles*/}
          {/* <Elements stripe={stripePromise}> */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/form" element={<WorkoutForm />} />
              <Route path="/test" element={<Test />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/success" element={<Success />} />
              <Route path="/cancel" element={<Cancel />} />
            </Routes>
          {/* </Elements> */}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
