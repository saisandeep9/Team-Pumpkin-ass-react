import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = ({ user }) => {
  return (
    <div>
      <div>
        <nav className="navbar navbar-light bg-light  navbar-expand-sm  ">
          <ul className="navbar-nav    ">
            {/* <li className="nav-item ">
              <NavLink to={"/"} className="  nav-link">
                <i className="fa fa-home"> Home</i>
              </NavLink>
            </li> */}

            {/* <li className="nav-item ">
              <NavLink className="nav-link " to="/login">
                <i className="fa fa-sign-in"> Login</i>
              </NavLink>
            </li> */}
            {user && user.userType === "Normal user" && (
              <li className="nav-item ">
                <NavLink className="nav-link " to="/homeNormalUser">
                  <i className="fa">Normal User</i>
                </NavLink>
              </li>
            )}

            {user && user.userType === "Contributor" && (
              <li className="nav-item ">
                <NavLink className="nav-link " to="/uploadImage">
                  <i className="fa"> Contributor</i>
                </NavLink>
              </li>
            )}
            {user && (
              <li className="nav-item ">
                <NavLink className="nav-link " to="/logout">
                  <i className="fa"> Logout</i>
                </NavLink>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
