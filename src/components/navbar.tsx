import React from 'react';
import Logo from '../assets/logo.svg';
import './navbar-style.css';

const Navbar: React.FC = () => {
    return (
        <div className="navbar-wrapper">
            <div className="navbar">
                <div className="logo-container">
                    <img className="logo-image" id="logo-svg" src={Logo}/>
                </div>
                <ul className="link-container">
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                    <li>
                        <a href="#work">Work</a>
                    </li>
                    <li>
                        <a href="#experience">Experience</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;