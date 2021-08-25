import axios from "axios";
import { useEffect } from "react";
import { baseUrl } from "../constants/url";

export const useAxiosInterceptors = () => {
  useEffect(() => {
    axios.interceptors.request.use((req) => {
      req.baseURL = baseUrl;
      return req;
    });
  }, []);
};
