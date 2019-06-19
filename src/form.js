import React, { Component } from "react";

class UserForm extends Component {
  constructor() {
    super();
    console.log("CONSTRUCTOR");
  }
  state = {
    username: "",
    name: "",
    email: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.updateList(this.state);
  };
  componentDidMount() {
    console.log("Mounted");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("updated", prevProps, prevState);
  }
  render() {
    return (
      <div className="col-sm-4 col-md-4">
        {this.state.userName}
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>User Name</label>
            <input
              type="text"
              className="form-control"
              name="username"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              className="form-control"
              name="email"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default UserForm;
