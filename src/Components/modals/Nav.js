import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <div className="Navigation">
        <Link to="/">Home</Link>

        <div>
          <Link to="/login">Login</Link>
        </div>
        <div>
          <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
