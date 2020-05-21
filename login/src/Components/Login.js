import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Login = (props) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const history = useHistory();

  const login = (e) => {
    e.preventDefault();
    console.log({ username, password });

    // //Make a POST request and send the user object to the api
    // axios
    //   .post("http://localhost:5000/api/login", {username, password})
    //   .then((res) => {
    //     // res should contain user info with id and token
    //     console.log(res);
    //     localStorage.setItem("token", res.data.payload);
    //     localStorage.setItem("userId", res.data.payload);

    //     history.push("/sleepentries");
    //   })
    //   .catch((err) => console.log(err.message));
  };

  return (
    <>
      <h1>Login to use Sleep Tracker</h1>

      <form onSubmit={login}>
        <input
          name="Email"
          type="text"
          placeholder="email"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <br />
        <input
          name="Password"
          type="text"
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <button>Login</button>
      </form>
    </>
  );
};

export default Login;
