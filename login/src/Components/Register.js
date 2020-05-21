import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const initialUser = {
  name: "",
  email: "",
  password: "",
  yearOfBirth: "",
  age: "",
};

const Register = (props) => {
  const [user, setUser] = useState(initialUser);

  const history = useHistory();

  const registerUser = (e) => {
    e.preventDefault();
    console.log(user);

    // //Make a POST request and send the user object to the api
    // axios
    //   .post("http://localhost:5000/api/register", user)
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
      <h1>Register to use Sleep Tracker</h1>

      <form onSubmit={registerUser}>
        <input
          name="Name"
          type="text"
          placeholder= 'name'
          onChange={(e) => {
            user.name = e.target.value;
            setUser(user);
          }}
        />
        <br/>
        <input
          name="Email"
          type="text"
          placeholder= 'email'
          onChange={(e) => {
            user.email = e.target.value;
            setUser(user);
          }}
        />
        <br/>
        <input
          name="Password"
          type="text"
          placeholder= 'password'
          onChange={(e) => {
            user.password = e.target.value;
            setUser(user);
          }}
        />
        <br/>
        <input
          name="Year of Birth"
          type="text"
          placeholder= 'birth year'
          onChange={(e) => {
            user.yearOfBirth = e.target.value;
            setUser(user);
          }}
        />
        <br/>
        <input
          name="Age"
          type="text"
          placeholder= 'age'
          onChange={(e) => {
            user.age = e.target.value;
            setUser(user);
          }}
        />
        <br/>
        <button>Register</button>
      </form>
    </>
  );
};

export default Register;
