import React from "react";
import Input from "../common/input";
import Validation from "../common/validation";
import Joi from "joi-browser";
import axios from "axios";
import { Link } from "react-router-dom";

class UploadImage extends Validation {
  state = {
    data: {
      imageName: "",
    },
    errors: {},

    selectedFile: null,
  };

  schema = {
    imageName: Joi.string().required().min(5).max(255),
  };

  // async componentDidMount() {
  //   // const { data: products } = await axios.get(config.apiUrl + "/products");
  //   const data = { ...this.state.data };
  //   const { data: categories } = await axios.get(
  //     ` http://localhost:9630/api/categories`
  //   );
  //   data.Categories = categories;
  //   console.log("data from cat:-", categories, "d", data);

  //   this.setState({ data });
  // }

  // On file select (from the pop up)
  onFileChange = (event) => {
    // Update the state
    console.log("onFileChange", event.target.files[0]);

    this.setState({ selectedFile: event.target.files[0] });
    let d = axios
      .get("http://localhost:9630/api/image")
      .then((res) => console.log(res));
    console.log("d", d);
  };

  onFileUpload = (e) => {
    e.preventDefault();
    // Create an object of formData
    // const data = this.state.data;
    const formData = new FormData();

    // Update the formData object
    formData.append("file", this.state.selectedFile);

    // Details of the uploaded file
    // console.log(this.state.selectedFile.name);

    // Request made to the backend api
    // Send formData object
    // axios.post("http://localhost:9630/api/image", formData).then((res) => {
    //   console.log(res.statusText);
    // });
    let d = axios.get("http://localhost:9630/api/image");
    console.log("d", d);
  };

  doSubmit = async () => {
    console.log("log in", this.state.data);
  };

  render() {
    const { data, errors } = this.state;
    return (
      <div className="text-color">
        <div className="  ">
          <form onSubmit={this.handleSubmit} className="col-7">
            <h2>upload image</h2>
            <Input
              id="imageName"
              label="Image Name"
              type="text"
              value={data.imageName}
              placeholder="Image Name"
              className="form-control "
              onChange={this.handleChange}
              // error={errors.imageName}
            />
            <Input
              id="image"
              label="Image"
              type="file"
              value={data.image}
              // placeholder="Name"
              className="m-2 "
              onChange={this.handleChange}
              // error={errors.image}
            />

            <button
              type="submit"
              className=" btn btn-primary  btn-block mb-3 mt-3"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default UploadImage;
