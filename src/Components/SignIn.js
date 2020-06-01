import React, { useState } from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom';

export default function SignIn(props) {
  const [signIn, setSignIn] = useState({
    email: "",
    password: "",
  });
  const [loads, setLoads] = useState(false);
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoads(true);

    axios
      .post("https://bw.stvsu.com/auth/login", signIn) 
      .then((response) => {
        localStorage.setItem('token', response.data.token)
        console.log("response: ", response);
        setLoads(false);
        history.push("/homepage")
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
        <div> Loading... </div>
      </div>
    );
  } else {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">email: </label>
            <input
              id="email"
              label="email"
              name="email"
              placeholder="email"
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

