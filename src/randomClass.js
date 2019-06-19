import React, { Component } from "react";

class RandomNumber extends Component {
  render() {
    return (
      <div>
        <h2>Random Number</h2>
        <p>{Math.random() * 100}</p>
      </div>
    );
  }
}

export default RandomNumber;
