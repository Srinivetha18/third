import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
  return (
    
      <nav className='nav1'>

        <div className='heading'>
          <ul className='nav-links'>
            <li className='logo'><Link to='/Home'>
            <img src="https://w7.pngwing.com/pngs/450/256/png-transparent-bakery-logo-thumbnail.png" />
            </Link>
            </li>
            
            <li className='dropbtn'>
              {/* <Link to='/'>Cakes</Link> */}
                <div className='dropdown-content'>
                  <Link to='/oil'>OIL</Link>
                  <Link to='/Shampoo'>Shampoo</Link>
                  <Link to='/Soap'>Soap</Link>
                </div>
            </li>
            </div>
            <nav/>
