import axios from "axios";

import { config } from "@/config";
import { useAuthStore } from "@/store/auth";

export const fetcher = axios.create({
  baseURL: config.API_BASE_URL,
});

fetcher.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token ?? "";
  console.log('in axios', token);

  config.headers.Authorization = `Bearer ${token}`;

  return config;
})