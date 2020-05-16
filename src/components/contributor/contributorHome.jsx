import React, { Component } from "react";
import UploadImage from "./uploadImage";
import Dol from "./dowloadReport";
import { Link } from "react-router-dom";
import { Route, Switch } from "react-router-dom";

class ContributorHome extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="row m-3 h-75">
          <div className="col-2 box h-100 ">
            {/* <h1>upload image</h1> */}

            <ul className="   navbar  nav navbar-default">
              <li className="nav-item ">
                <Link to={"/dol"} className="  ">
                  <i className=""> Home</i>
                </Link>
              </li>
              <li className="nav-item ">
                <Link to={"/contributorHome"} className="  ">
                  <i className=""> upload Image</i>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-6 box ml-3">
            <Switch>
              <Route path="/ContributorHome" exact component={UploadImage} />
              <Route path="/dol" exact component={Dol} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default ContributorHome;
