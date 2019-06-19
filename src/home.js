import React, { Component } from "react";
import { UserService } from "./services/user-service";
import ListData from "./list";
import Loader from "./hoc/loader";

class Home extends Component {
  state = {
    userData: [],
    loading: true
  };
  details = id => {
    this.props.history.push("/" + id);
  };
  removeUser = id => {
    let userData = this.state.userData.filter(user => {
      return user.id !== id;
    });
    this.setState({
      userData
    });
  };
  render() {
    if (this.state.userData.length === 0) {
      UserService.getUsers().then(users => {
        this.setState({
          userData: users,
          loading: false
        });
      });
    }
    let { userData } = this.state;
    return (
      <ListData
        userList={userData}
        loading={this.state.loading}
        details={this.details}
        removeUser={this.removeUser}
      />
    );
  }
}

export default Loader(Home);
