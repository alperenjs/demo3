import axios from "axios";
import AuthService from "../services/authentication.service";

const { REACT_APP_BASE_URL } = process.env;

const https = axios.create({
  baseURL: REACT_APP_BASE_URL,
  timeout: 60000,
  headers: { "Content-Type": "application/json" },
});

export const setupInterceptor = (store) => {
  https.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  https.interceptors.request.use((config) => {
    const token = AuthService.getAccessToken();

    if (token !== null || token !== "") {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  });
};

export default https;
