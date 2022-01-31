import axios from "axios";

export const api = axios.create({
  baseURL: "https://json-hamburgueria-2.herokuapp.com/",
});
