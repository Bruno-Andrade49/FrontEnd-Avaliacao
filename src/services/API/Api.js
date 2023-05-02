import axios from "axios";

const api = axios.create({
  baseURL: "https://projeto-site-impulse.vercel.app/",
});

export default api;