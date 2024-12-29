import axios from "axios";
// Set up default config for http requests here
// Please have a look at here https://github.com/axios/axios#request config for the full list of configs
const axiosClient = axios.create({
  baseURL: "http://localhost:5173/v1",
  timeout: 10000,
  headers: {
    "content-type": "application/json",
  },
});

axiosClient.interceptors.request.use(
  async (config) => {
    let sessionId = localStorage.getItem("sid");
    if (sessionId && config.url !== '/sessions') {
      config.headers['sid'] = sessionId;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

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