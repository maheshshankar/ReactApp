import React, { Component } from "react";

class Props extends Component {
  render() {
    const { name } = this.props;
    return (
      <div className="col-sm-12 col-md-12">
        <label>Passed Properties :</label>
        <h3>{name}</h3>
      </div>
    );
  }
}

export default Props;
