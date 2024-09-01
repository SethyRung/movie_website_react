import Axios from "axios";

const withAuth = Axios.create({ baseURL: import.meta.env.VITE_API_URL });
withAuth.interceptors.request.use((config) => {
  return new Promise((resolve) => {
    const token = localStorage.getItem("token");
    config.headers["Authorization"] = `Bearer ${token}`;
    config.headers["Content-Type"] = "application/json";
    resolve(config);
  });
}, Promise.reject);
withAuth.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response.status === 403) {
      localStorage.removeItem("token");
      window.location.replace("/login");
    }
  }
);

const withoutAuth = Axios.create({ baseURL: import.meta.env.VITE_API_URL, timeout: 10000 });
withAuth.interceptors.request.use((config) => {
  return new Promise((resolve) => {
    config.headers["Content-Type"] = "application/json";
    resolve(config);
  });
});

const withApiKey = Axios.create({ baseURL: import.meta.env.VITE_API_URL, timeout: 10000 });
withApiKey.interceptors.request.use((config) => {
  return new Promise((resolve) => {
    const apikey = import.meta.env.VITE_API_KEY;
    config.params = { api_key: apikey };
    config.headers["Content-Type"] = "application/json";
    resolve(config);
  });
}, Promise.reject);
// withApiKey.interceptors.response.use(
//   (res) => res,
//   (error) => {
//     const errRes = error.response;
//     return {
//       status: errRes.status,
//       message: errRes.data.status_message,
//     };
//   }
// );

export default {
  withAuth,
  withoutAuth,
  withApiKey,
};
