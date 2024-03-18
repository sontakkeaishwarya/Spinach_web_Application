import React from 'react';
import './navbar.css'; 
// import Nav from 'react-bootstrap/Nav';

const Navbar = () => {
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part */}
        <div className="logo">
          <img src="images/logo.png" alt="Logo" />
        </div>

        {/* 2nd menu part */}
        <div className="menu-link ">
          
            <ul>
              <li class="company">
                <span id="com">The Company</span>
              </li>
              <li class="services">
                <span id="ser">Our Services </span><img id="dropdown"src='images/Dropdown.png' alt="img"></img>
              </li>
              <li class="Expertise">
                <span id="exp">Our Expertise</span>
              </li>
              <li class="work">
                <span id="clnt">Client work</span>
              </li>
            </ul>
         
        </div>

        {/* 3rd social media links */}
        <div className="engage">
          <span id="eng">Engage Us</span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
