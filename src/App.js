import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Form from "./Components/Form";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Form />
      </Switch>
    </div>
  );
}

export default App;
