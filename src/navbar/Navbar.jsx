import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Hiro</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        {/* <li><Link to="/snake">Snake Game</Link></li> */}
       <li><Link to="/projects">Projects</Link></li>
        {/*  <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
