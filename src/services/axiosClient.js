import axios from "axios";
import queryString from "query-string";
// Set up default config for http requests here
// Please have a look at here `https://github.com/axios/axios#request config` for the full list of configs
const REACT_APP_BASE_URL = 'https://api.example.com/auth/';

const axiosClient = axios.create({
  baseURL: REACT_APP_BASE_URL,
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
  // Handle token here ...
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data && response.config.method === "get") {
      const total = Number(response.headers["x-total-count"]);
      return {
        total: total,
        data: response.data,
      };
    }
    if (response && response.data && response.config.method === "post") {
      return response.data;
    }
    return response;
  },
  (error) => {
    // Handle errors
    throw error;
  }
);

export default axiosClient;