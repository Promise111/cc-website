import axios from "axios";

import { getAuthToken } from "../utilities/helpers";
const api_url = import.meta.env.VITE_BASE_URL || "http://localhost:8001/api";

let token = getAuthToken();

const instance = axios.create({
  baseURL: api_url,
  headers: {
    "Access-Control-Allow-Headers": "X-Requested-With",
    Authorization: `Bearer ${token}`,
  },
});

export default instance;
