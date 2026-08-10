import axios from "axios";

import { msalInstance } from "../auth/msalInstance";

import { loginRequest } from "../auth/authConfig";

const api = axios.create({
  // baseURL: "https://localhost:5173/api",
  baseURL: import.meta.env.VITE_API_URL,  
});

api.interceptors.request.use(async (config) => {
  const account = msalInstance.getActiveAccount();

  if (account) {
    const response = await msalInstance.acquireTokenSilent({
      ...loginRequest,
      account,
    });

    config.headers.Authorization = `Bearer ${response.accessToken}`;
  }

  return config;
});

export default api;
