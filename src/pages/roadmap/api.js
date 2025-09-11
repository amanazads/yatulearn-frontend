// api.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://yatulearn-server.onrender.com/api", // backend URL
  withCredentials: true, // include cookies/auth headers
});

export default api;
