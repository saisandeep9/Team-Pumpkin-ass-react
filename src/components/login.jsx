import React from "react";
import Validation from "./common/validation";
import Joi from "joi-browser";
import Input from "./common/input";
import auth from "../services/authService";

class Login extends Validation {
  state = {
    data: {
      email: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    email: Joi.string().required().min(5).max(255),
    password: Joi.string().required().min(5).max(300),
  };

  doSubmit = async () => {
    const { data } = this.state;
    const success = await auth.login(data);
    console.log("suc", success);
    if (success) {
      const user = auth.getCurrentUser();
      console.log("suc", user);

      if (user.userType === "Normal user") {
        window.location = "/homeNormalUser";
      } else {
        window.location = "/contributorHome";
      }
      // window.location = "/";
    } else {
      // window.location = "/";
    }
  };

  render() {
    const { data, errors } = this.state;
    return (
      <div>
        <div
          className="col-9 pb-3 m-5  "
          // style={{ width: "0%" }}
        >
          <form onSubmit={this.handleSubmit} className="p-3 box w-100 m-5 ">
            <h1 className="text-center"> Log in</h1>

            <Input
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
              name="password"
              label="Password"
              type="password"
              value={data.password}
              placeholder="Password"
              className="form-control "
              onChange={this.handleChange}
              error={errors.password}
            />

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

export default Login;
