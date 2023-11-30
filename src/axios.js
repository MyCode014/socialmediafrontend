import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "https://socialmediaapi1.onrender.com/",
  withCredentials: true,
});
