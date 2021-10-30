import React from "react";
import classes from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={classes.navbar}>
            <ul>
                <a href="#home"><li>Home</li></a>
                <a href="#about"><li>About</li></a>
                <a href="#resume"><li>Resume</li></a>
                <a href="#projects"><li>Projects</li></a>
                <a href="#contact"><li>Contact</li></a>
            </ul>
        </nav>
    )
}

export default Navbar