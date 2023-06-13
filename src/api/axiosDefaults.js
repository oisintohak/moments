import axios from "axios";

axios.defaults.baseURL = "https://drf-api-cnc7.onrender.com/";
// axios.defaults.baseURL = "https://8000-oisintohak-drfapi-ocels8dwy7r.ws-eu86.gitpod.io/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();
