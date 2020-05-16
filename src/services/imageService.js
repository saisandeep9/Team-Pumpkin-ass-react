import axios from "axios";

function imageUrl() {
  return process.env.REACT_APP_API_URL + "/images";
}

function categoriesUrl() {
  return process.env.REACT_APP_API_URL + "/categories";
}

export function getimages() {
  return axios.get(imageUrl());
}

export function getcategories() {
  return axios.get(categoriesUrl());
}

export default {
  getimages,
  getcategories,
};
