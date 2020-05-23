import React from "react";

import { library } from "@fortawesome/fontawesome-svg-core";

import { fab } from "@fortawesome/free-brands-svg-icons";


library.add(fab);

const WelcomePage = props => {
  return (
    <div className="negative-top-margin-adjustment">
      <div className="welcomePageContainer">
        <div className="textDiv">
          <h1>Sleep Tracker</h1>
          <h2>Perfect Sleep Tracker</h2>
        </div>
        <button
          className="blackButton"
          onClick={() => props.history.push("/register")}
        >
          Sign Up
        </button>
        <button
          className="whiteButton"
          onClick={() => props.history.push("/signin")}
        >
          Sign In
        </button>
        <br />
        <div className="welcomepage-socialmedia-container">

        </div>
      </div>
    </div>
  );
};
export default WelcomePage;
