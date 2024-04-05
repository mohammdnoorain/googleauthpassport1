import Navbar from "./components/Navbar";
import { Routes, Route} from "react-router-dom";
import Home from './pages/Home';

import Login from './pages/Login';
import Out from "./pages/Out";

import Fine from "./pages/Fine";

import './App.css';


function App() {

  return (
   
      <div>
        <Navbar  /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={ <Login />}
          />
         
          <Route
            path="/admin"
            element={<Fine  />}
          />
          <Route
            path="/logout"
            element={<Out/>}
          />
        </Routes>
      </div>
  
  );
}

export default App;
