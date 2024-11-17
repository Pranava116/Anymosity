// src/Navbar.js

import React, { useState } from 'react';
import './Navbar.css'; // Create a CSS file for styling

const Navbar = (props) => {
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
                <li><a href={props.url}>{props.page}</a></li>
                <li><a href='/'>{props.contact}</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;

