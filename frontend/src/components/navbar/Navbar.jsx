import React from "react";
import './Navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <nav>
                <a href="#home" className="nav-link">About</a>
                <a href="#projects" className="nav-link">Projects</a>
                <a href="#" className="nav-link">Experiences</a>
                <a href="#" className="nav-link">Skills</a>
                <a href="#" className="nav-link">Resume</a>
            </nav>
        </div>
    );
}
export default Navbar;