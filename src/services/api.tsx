import axios from "axios";
//adicionar o json server com seus endPoints, ao inves de local host
export const api = axios.create({
  baseURL: "http://localhost:3001",
});
