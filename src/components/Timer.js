import React, { Component } from "react";
import TimerUtil from "./TimerUtil";

export class Timer extends Component {
  state = {
    showHome: true,
  };

  toggleHome = (visibilty) => {
    this.setState({ showHome: visibilty });
  };

  render() {
    return (
      <div>
        {this.state.showHome ? <TimerUtil /> : <h1>Hello</h1>}
        <button onClick={() => this.toggleHome(false)}>Hide Home</button>
        <button onClick={() => this.toggleHome(true)}>Show Home</button>
      </div>
    );
  }
}

export default Timer;
