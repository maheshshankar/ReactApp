import React, { Component } from "react";
import { UserService } from "./services/user-service";

class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      loading: true
    };
    UserService.getUserById(this.props.match.params.id).then(user => {
      this.setState({
        user: user,
        loading: false
      });
    });
  }
  render() {
    let { user } = this.state;
    return !this.state.loading ? (
      <div className="col-sm-6">
        <div className="form-group">
          <label>Name:</label> {user.name}
        </div>
        <div className="form-group">
          <label>UserName:</label> {user.username}
        </div>
        <div className="form-group">
          <label>Email:</label> {user.email}
        </div>
      </div>
    ) : (
      <div>
        <div className="spinner-grow text-success" />
        <div className="spinner-grow text-danger" />
        <div className="spinner-grow text-success" />
        <div className="spinner-grow text-danger" />
      </div>
    );
  }
}

export default UserDetails;
