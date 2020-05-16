import axios from "axios";

function userUrl() {
  return process.env.REACT_APP_API_URL + "/users";
}

export function signup(data) {
  return axios.post(userUrl(), data);
}

export default {
  signup,
};
