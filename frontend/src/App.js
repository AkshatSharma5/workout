import { BrowserRouter, Routes, Route } from "react-router-dom";

//import pages and components
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import WorkoutForm from "./components/workoutForm";
import Test from "./pages/test";
import Shop from "./pages/Shop";
import Success from "./components/Success";
import Cancel from "./components/Cancel";
import Signup from "./pages/signup";
import Login from "./pages/login";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/form" element={<WorkoutForm />} />
              <Route path="/test" element={<Test />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/success" element={<Success />} />
              <Route path="/cancel" element={<Cancel />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
            </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
