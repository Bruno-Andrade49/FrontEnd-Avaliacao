import axios from "axios";

const api = axios.create({
  baseURL: "http://45.179.88.29:5050/",
});

export default api;