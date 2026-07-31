import axios from "axios";

const api = axios.create({
  baseURL: "https://event-management-backend-riyc.onrender.com",
});

export default api;