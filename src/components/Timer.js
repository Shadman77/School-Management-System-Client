import React, { Component } from "react";
import TimerUtil from "./TimerUtil";

import Button from "react-bootstrap/Button";

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
        {this.state.showHome ? (
          <TimerUtil />
        ) : (
          <h1 className="text-center">Hello</h1>
        )}
        <div className="text-center">
          <Button
            className="m-1"
            onClick={() => this.toggleHome(false)}
            variant="danger"
          >
            Hide Timer
          </Button>
          <Button
            className="m-1"
            onClick={() => this.toggleHome(true)}
            variant="info"
          >
            Show Timer
          </Button>
        </div>
      </div>
    );
  }
}

export default Timer;
