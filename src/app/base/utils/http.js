import axios from "axios";

const { REACT_APP_BASE_URL, REACT_APP_API_KEY } = process.env;

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
    //   const {token} = store.getState().authentication;
    const { token } = "token1234";

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  });
};

export default https;
