import axios from "axios";

const request = axios.create({
  baseURL: `http://127.0.0.1:3005`,
  withCredentials: true,
  headers: {
    "Content-type": "application/json",
  },
});

export default request