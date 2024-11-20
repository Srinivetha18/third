import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 


export default function Navbar() {
  return (
    <nav className='nav0'>
      <div className='heading0'>
        <ul className='nav-links0'>
          
          {/* Logo Section */}
          <li className='subli0 logo'>
            <img 
              src="data:image/png;base64,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" 
              alt="Logo" 
            />
          </li>
          
          {/* Search Bar */}
          <li className='subli0 search'>
            <input type="text" placeholder="Search Oil" name="search"  height={40} width={700}/>
            <button> 
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                        </svg>
            </button>
          </li>

          {/* Navigation Links */}
          <div class="navbar">
                {/* <div class="dropdown">
                  <button class="dropbtn">All Products 
                    <i class="fa fa-caret-down"></i>
                  </button> */}
                  <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      All Product
                    </button>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">Oil</a></li>
                      <li><a class="dropdown-item" href="#">Shampoo</a></li>
                      <li><a class="dropdown-item" href="#">Soap</a></li>
                      <li><a class="dropdown-item" href="#">Combos</a></li>
                    </ul>
                  </div>
                  <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Hair Concern
                    </button>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">Hair Fall</a></li>
                      <li><a class="dropdown-item" href="#">Dandruff</a></li>
                      
                    </ul>
                  </div>
                {/* </div>  */}
                {/* <a href="#home">Hair Concern</a> */}
                <a href="#hairloss" className='hairloss'>Undertaking Hair Loss</a>
              </div>

          {/* Icon Links */}
          <li className='subli0'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
            </svg>
          </li>

          <li className='subli0'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
            </svg>
          </li>

          <li className='subli0'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bell" viewBox="0 0 16 16">
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6"/>
            </svg>
          </li>

          {/* Login Button */}
          
          <li className='subli2 log'>
          <button type="button" className="btn1">
          <Link to="/Login">Login</Link>
            </button>
            
            </li>

          

        {/* Add Cart Button */}
          <li className='subli2 log'>
         
            <button type="button" className="btn2">
                <Link to='/AddCart'>Add Cart</Link>
            </button>
            
          </li>
          

        </ul>
      </div>
    </nav>
  );
}



