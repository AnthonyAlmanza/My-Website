import React from 'react';
import Logo from '../assets/logo.png';
import './navbar-style.css';
import {Link, useLocation} from "react-router-dom";

function GetLinks() {
    const location = useLocation();
    const homepage = '/';

    if (location.pathname === homepage) {
        return (<ul id="navbar-link-container" className="link-container">
                    <li><a className="underline-animation navbar-link" href="/#contact">Contact</a></li>
                    <li><a className="underline-animation navbar-link" href="/#work">Work</a></li>
                    <li><a className="underline-animation navbar-link" href="/#experience">Experience</a></li>
                    <li><a className="underline-animation navbar-link" href="/#about">About</a></li>
        </ul>)
    }
    return (<ul id="navbar-link-container" className="link-container">
                <li><Link className="underline-animation navbar-link" to="/#contact">Contact</Link></li>
                <li><Link className="underline-animation navbar-link" to="/#work">Work</Link></li>
                <li><Link className="underline-animation navbar-link" to="/#experience">Experience</Link></li>
                <li><Link className="underline-animation navbar-link" to="/#about">About</Link></li>
    </ul>)
}

const Navbar: React.FC = () => {
    return (
        <div className="navbar-wrapper">
            <div className="navbar">
                <div className="logo-container">
                    <Link to="/" className="underline-animation">
                        <img className="logo-image" id="logo-png" src={Logo}/>
                    </Link>
                </div>
                {GetLinks()}
            </div>
        </div>
    );
};

export default Navbar;