import React from "react";

const NavBar = () => {
  return (
    // <div className="nav">
    //     <div className="navLinks">
    //         <NavLink to="/dashboard" className="links">Tips</NavLink>
    //         <NavLink to="/dashboard" className="links">Settings</NavLink>
    //         <NavLink to="/signin" className="links">Logout</NavLink>
    //         <NavLink to='/sleep-data' className='links'>Sleep Data</NavLink>
    //     </div>
    // </div>
    // <nav>
    //   <a href="index.html">Home</a>
    //   <a href="contact.html">About</a>
    //   <a href="settings.html">Settings</a>
    //   <a href="login.html">Sign In</a>
    // </nav>
    <>
      <nav>
        <a href="/homepage">Home</a>
        <a href="/">About</a>
        <a href="/">Settings</a>
        <a href="/register">Sign In</a>
      </nav>
    </>
  );
};

export default NavBar;
