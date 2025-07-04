import axios from "axios";

const http = axios.create({
  baseURL: import.meta.env.VITE_HTTP_BASE_URL || "localhost:5005",
  timeout: 10000, // 10 seconds
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

http.interceptors.request.use(
  (config) => {
    // Add any request interceptors here if needed
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  },
);

http.interceptors.response.use(
  (response) => {
    // Add any response interceptors here if needed
    if (response.data.code !== 0) {
      return Promise.reject(`${response.data.message || "请求失败"}`);
    }
    return response;
  },
  (error) => {
    // Handle response error
    return Promise.reject(error);
  },
);

export default http;
