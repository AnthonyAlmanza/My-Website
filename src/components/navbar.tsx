import React from 'react';
import Logo from '../assets/logo.png';
import './navbar-style.css';

const Navbar: React.FC = () => {
    return (
        <div className="navbar-wrapper">
            <div className="navbar">
                <div className="logo-container">
                    <img className="logo-image" id="logo-png" src={Logo}/>
                </div>
                <ul id="navbar-link-container" className="link-container">
                    <li><a className="underline-animation navbar-link" href="#contact">Contact</a></li>
                    <li><a className="underline-animation navbar-link" href="#work">Work</a></li>
                    <li><a className="underline-animation navbar-link" href="#experience">Experience</a></li>
                    <li><a className="underline-animation navbar-link" href="#about">About</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;