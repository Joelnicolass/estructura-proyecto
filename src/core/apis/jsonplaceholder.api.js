import axios from "axios";

export const jsonPlaceHolderAPI = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const jsonplaceholder_paths = {
  users: "/users",
};
