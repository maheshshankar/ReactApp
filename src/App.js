import React, { Component } from "react";
// import RandomNumber from "./randomClass";
// import UserForm from "./form";
// import Props from "./props";
// import ListData from "./list";
import { userList } from "./userList";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./navbar";
import Home from "./home";
import About from "./about";
import Contact from "./contact";
import UserDetails from "./user-details";

class App extends Component {
  state = {
    userList: userList
  };

  removeUser = id => {
    let updatedUserList = this.state.userList.filter(user => {
      return user.id !== id;
    });
    this.setState({
      userList: updatedUserList
    });
  };
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <header className="App-header">
            <h1>My APP</h1>
          </header>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/:id" component={UserDetails} />
          </Switch>
          {/* <RandomNumber /> */}
          {/* <UserForm updateList={this.updateUserList} /> */}
          {/* <Props name="Learn Reacttt" /> */}
          {/* <ListData userList={this.state.userList} removeUser={this.removeUser} /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
