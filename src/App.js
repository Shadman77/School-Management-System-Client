import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import About from "./components/About";
import Timer from "./components/Timer";
import Home from "./components/Home";
import Menu from "./components/Menu";
export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Menu />
          <Switch>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/timer">
              <Timer></Timer>
            </Route>
            <Route path="/">
              <Home></Home>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
