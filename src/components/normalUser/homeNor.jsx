import React, { Component } from "react";
import ListGroup from "../common/listgroup";

import Image from "../../services/imageService";

class HomeNormalUser extends Component {
  state = {
    images: [],
    Categories: [],
    selectedCategory: [],
  };

  async componentDidMount() {
    const { data: images } = await Image.getimages();

    const { data: categories } = await Image.getcategories();

    this.setState({ Categories: categories, images });
  }

  handleSelectCategory = (category) => {
    this.setState({ selectedCategory: category });
  };

  render() {
    const { images, Categories, selectedCategory } = this.state;
    let filterimages = images;
    if (selectedCategory._id) {
      filterimages = images.filter(
        (i) => i.category._id === selectedCategory._id
      );
    }

    return (
      <div className="row ">
        <div className="col-3  text-center " style={{ width: "800px" }}>
          Categories
          <ListGroup
            items={this.state.Categories}
            onSelectItem={this.handleSelectCategory}
            oncheck={this.handelcheck}
            selectedItem={this.state.selectedCategory}
          />
        </div>
        <div className="col-8 box">
          <h1 className="text-color m-2">Normal user</h1>
          <div className="   ">
            {filterimages.map((image) => (
              <div
                key={image._id}
                className="card box m-4  float-left"
                style={{ width: "18rem" }}
              >
                <img
                  className="card-img-top"
                  src={image.img}
                  alt="Card image cap"
                  style={{ width: "18rem", hight: "20rem" }}
                />
                {/* {console.log(
                  "image",
                  process.env.REACT_APP_API_URL + "/images/" + image.img
                )} */}
                <div className="card-body">
                  Image Name:- <h6> {image.imageName}</h6>
                  Image category:- <h6> {image.category.categoryName}</h6>
                  contributor:- <h6> {image.contributor}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default HomeNormalUser;
