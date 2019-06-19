import React, { Component } from "react";

const Loader = (WrappedComponent, loading) => {
  return class NewComponent extends Component {
    render() {
      return this.props.loading || loading ? (
        <div>
          <div className="spinner-grow text-success" />
          <div className="spinner-grow text-danger" />
          <div className="spinner-grow text-success" />
          <div className="spinner-grow text-danger" />
        </div>
      ) : (
        <WrappedComponent {...this.props} />
      );
    }
  };
};

export default Loader;
