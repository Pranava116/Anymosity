// src/Navbar.js

import React, { useState } from 'react';
import './Navbar.css'; // Create a CSS file for styling

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="logo">MyLogo</div>
            <div className="menu-icon" onClick={toggleMenu}>
                &#9776; {/* Hamburger icon */}
            </div>
            <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                <li><a href="#">Login/Register</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;

