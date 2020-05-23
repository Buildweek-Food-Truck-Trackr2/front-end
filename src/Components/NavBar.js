import React from 'react'
import { NavLink } from "react-router-dom";
import '../styles/NavBar.scss';

const NavBar = () => {
    return (
        <div className="nav">
            <p>Sleep Tracker</p>
            <div className="navLinks">
                <NavLink to="/dashboard" className="links">Tips</NavLink>
                <NavLink to="/dashboard" className="links">Settings</NavLink>
                <NavLink to="/signin" className="links">Logout</NavLink>
                <NavLink to='/sleep-data' className='links'>Sleep Data</NavLink>
            </div>
        </div>
    )
}

export default NavBar;
