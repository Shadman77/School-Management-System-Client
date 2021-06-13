import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Redux
import { Provider } from "react-redux";
import store from "./redux/store";

// Components
import About from "./components/About";
import Timer from "./components/Timer";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Todos from "./components/Todos";
export class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Router>
            <Menu />
            <Switch>
              <Route path="/about">
                <About></About>
              </Route>
              <Route path="/timer">
                <Timer></Timer>
              </Route>
              <Route path="/todos">
                <Todos></Todos>
              </Route>
              <Route path="/">
                <Home></Home>
              </Route>
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
