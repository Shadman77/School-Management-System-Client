import React, { Component } from "react";

export class TimerUtil extends Component {
  state = {
    seconds: 0,
  };

  incrementTime = () => {
    const time = this.state.seconds;
    this.setState({ seconds: time + 1 });
  };

  componentDidMount() {
    this.msg = "Component did mount";
    // alert("Component mounted");
    console.log("Component mounted");
    this.timer = setInterval(this.incrementTime, 1000);
  }

  componentDidUpdate() {
    // clearInterval(this.timer);
    console.log(this.msg);
    // alert(this.msg);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("Component will unmount now");
  }

  render() {
    return (
      <div>
        <h1
          style={{
            textAlign: "center",
          }}
        >
          {this.state.seconds}
        </h1>
      </div>
    );
  }
}

export default TimerUtil;
