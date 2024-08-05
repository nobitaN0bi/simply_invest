import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHouse, faPiggyBank, faBars } from '@fortawesome/free-solid-svg-icons';
import './navbar.css'; // Import the CSS file for Navbar

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="navbar">
            <Link to="/" className="logo">Simply Invest</Link>
            <div className="menu-icon" onClick={toggleMobileMenu}>
                <FontAwesomeIcon icon={faBars} />
            </div>
            <ul className={`nav-links ${isMobileMenuOpen ? 'mobile' : ''}`}>
                <li>
                    <Link to="/recommendations" onClick={toggleMobileMenu}>
                        <FontAwesomeIcon icon={faHouse} />
                    </Link>
                </li>
                <li>
                    <Link to="/market-details" onClick={toggleMobileMenu}>
                        <FontAwesomeIcon icon={faPiggyBank} />
                    </Link>
                </li>
                <li>
                    <Link to="/login" onClick={toggleMobileMenu}>
                        <FontAwesomeIcon icon={faUser} />
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
