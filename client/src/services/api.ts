import axios from "axios";

export const BASE_URL = 'http://localhost:8080/'

const API = axios.create({
    baseURL: BASE_URL,
    headers: {
        Accept: "applictaion/json",
        "Content-Type": "applications/json",
    },
});

export default API;