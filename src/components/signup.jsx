import React from "react";
import Validation from "./common/validation";
import Joi from "joi-browser";
import Input from "./common/input";
import signup from "../services/signupServices";

class Signup extends Validation {
  state = {
    data: {
      name: "",
      email: "",
      password: "",
      userType: "",
    },
    errors: {},
  };

  schema = {
    name: Joi.string().required().min(5).max(255),
    email: Joi.string().required().min(5).max(255),
    password: Joi.string().required().min(5).max(300),
    userType: Joi,
  };

  doSubmit = async () => {
    console.log("log in", this.state.data);
    const { data } = this.state;
    const success = await signup.signup(data);
    console.log("suc", success);
    if (success) {
      // window.location = "/";
    }
  };

  render() {
    const { data, errors } = this.state;
    return (
      <div>
        <div className="     ">
          <form onSubmit={this.handleSubmit} className="p-3 box w-75 ml-5">
            <h1 className="text-center"> Sign up</h1>
            <Input
              // id="name"
              name="name"
              label="Name"
              type="text"
              value={data.name}
              placeholder="Name"
              className="form-control "
              onChange={this.handleChange}
              error={errors.name}
            />
            <Input
              // id="email"
              name="email"
              label="Email address"
              type="text"
              value={data.email}
              placeholder="Enter email"
              className="form-control "
              onChange={this.handleChange}
              error={errors.email}
            />

            <Input
              // id="password"
              name="password"
              label="Password"
              type="password"
              value={data.password}
              placeholder="Password"
              className="form-control "
              onChange={this.handleChange}
              error={errors.password}
            />
            <div className="radio">
              <label>
                <input
                  // id="userType"
                  name="userType"
                  type="radio"
                  value="Normal user"
                  checked={data.userType === "Normal user"}
                  onChange={this.handleChange}
                />
                Normal user
              </label>
            </div>
            <div className="radio">
              <label>
                <input
                  // id="userType"
                  name="userType"
                  type="radio"
                  value="Contributor"
                  checked={data.userType === "Contributor"}
                  onChange={this.handleChange}
                />
                Contributor
              </label>
            </div>

            <button
              type="submit"
              className=" btn btn-primary  btn-block mb-3 mt-3"
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
