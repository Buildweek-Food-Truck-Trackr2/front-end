import React from "react";
import { Route, Switch } from "react-router-dom";
import Form from "./Components/Signup";
import "./App.css";
import Home from "./Components/modals/Home";
import Login from "./Components/modals/Login";
import Navigation from "./Components/modals/Nav";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Form} />
      </Switch>
    </div>
  );
}

export default App;
