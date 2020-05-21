import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";
import Register from "./Components/Register";

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Sign Up</Link>
          </li>
        </ul>
      </div>
      <Switch>
          {/* <PrivateRoute exact path="/protected" component={GasPrices} /> */}
          <Route exact path="/login" render= {(props) =><Login {...props}/>}/>
          <Route exact path="/register" render= {(props) =><Register {...props}/>}/>

         
        </Switch>
    </Router>
  );
}

export default App;
