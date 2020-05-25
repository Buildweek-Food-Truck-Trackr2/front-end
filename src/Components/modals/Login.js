import React, { useState } from "react";
import axios from "axios";

export default function Signin(props) {
  const [signIn, setSignIn] = useState({
    username: "",
    password: "",
  });
  const [loads, setLoads] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoads(true);

    axios
      .post("Need BackEnd URL", signIn)
      .then((response) => {
        console.log("response: ", response);
        setLoads(false);
        // props.history.push("/my");
      })
      .catch((err) => console.log("Error: ", err));
  };

  const handleChanges = (event) => {
    setSignIn({
      ...signIn,
      [event.target.name]: event.target.value,
    });
  };

  if (loads === true) {
    return (
      <div>
        <div> Oops! Try again! </div>
      </div>
    );
  } else {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username: </label>
            <input
              id="username"
              label="Username"
              name="username"
              placeholder="Username"
              onChange={handleChanges}
            />
            <br />
            <label htmlFor="password">Password: </label>
            <input
              name="password"
              label="Password"
              type="password"
              id="password"
              placeholder="Password"
              onChange={handleChanges}
            />
          </div>
          <button>Sign In</button>
          <div></div>
        </form>
      </div>
    );
  }
}
