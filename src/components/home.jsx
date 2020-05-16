import React, { Component } from "react";
import Login from "../components/login";
import Signup from "../components/signup";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className=" row   m-5 text-color  ">
        <div
          className=" col-6
        "
        >
          <Signup />
        </div>
        <div className="col-6  ">
          <Login />
        </div>
      </div>
    );
  }
}

export default Home;
