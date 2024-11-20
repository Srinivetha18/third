import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Correct import for routing
import Navbar from './Components/Navbar'; // Assuming Navbar is your navigation bar
import Login from './Components/Login'; // Login page component
import Home from './Components/Home'; // Home page component
import Footer from './Components/Footer Page';
// import Oilpage from './Components/Oilpage';

function App() {
  return (
    <div>
      
      <Router> 
        {/* Navbar should always be visible */}
        <Navbar /> 
        <footer/> 

        {/* Define Routes and which components to render */}
        <Routes>
          {/* Home component is rendered when user visits '/' */}
          <Route path="/" element={<Home />} />
          
          {/* Login component is rendered when user visits '/Login' */}
          <Route path="/Login" element={<Login />} />
          {/* <Route path='/Oilpage' element={<Oilpage/>} /> */}
          <Route path="/Footer" element={<Footer />} />
      
        </Routes>
      </Router>  
    </div>
  );
}

export default App;




