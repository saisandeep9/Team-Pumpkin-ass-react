import React, { Component } from "react";

import { Route, Switch } from "react-router-dom";
import auth from "./services/authService";
import Home from "./components/home";
import Logout from "./components/logout";
import NavBar from "./components/navBar";
import HomeNormalUser from "./components/normalUser/homeNor";
import UploadImage from "./components/contributor/uploadImage";
import Dol from "./components/contributor/dowloadReport";

import "./App.css";
import ContributorHome from "./components/contributor/contributorHome";

class App extends Component {
  state = {
    user: {},
  };

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  render() {
    const user = this.state;

    return (
      <div className="m-2">
        <NavBar user={this.state.user} />

        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/logout" component={Logout} />
            <Route path="/homeNormalUser" exact component={HomeNormalUser} />

            <Route path="/contributorHome" exact component={ContributorHome} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
