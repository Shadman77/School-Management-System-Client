import React, { Component } from "react";
import HomePage from "./components/HomePage";

export class App extends Component {
  state = {
    showHome: true,
  };

  hideHome = () => {
    this.setState({ showHome: false });
  };

  showHome = () => {
    this.setState({ showHome: true });
  };

  render() {
    return (
      <div>
        {this.state.showHome ? <HomePage /> : <h1>Hello</h1>}
        <button onClick={this.hideHome}>Hide Home</button>
        <button onClick={this.showHome}>Show Home</button>
      </div>
    );
  }
}

export default App;
