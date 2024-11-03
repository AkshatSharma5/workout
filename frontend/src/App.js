import {BrowserRouter, Routes, Route} from 'react-router-dom'

//import pages and components
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import WorkoutForm from './components/workoutForm';
import Test from './pages/test';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className='pages'> {/*for styles*/}
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/form" element={<WorkoutForm/>}/>
            <Route path="/test" element={<Test/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
