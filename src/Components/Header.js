import React from "react";
import NavBar from "./NavBar";
import {Link} from "react-router-dom";


const Header = () => {
  return (
    <>
      <header>
        <Link to= {"/welcome"}>
        <h1>Sleep Tracker</h1>
        </Link>
       
        <NavBar />
      </header>
    </>
  );
};

export default Header;
