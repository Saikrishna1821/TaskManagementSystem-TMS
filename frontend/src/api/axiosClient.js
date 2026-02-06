import axios from "axios";

console.log(process.env.baseURL)

//Todo : baseurl needs to be in env 
export const axiosClient = axios.create({
  baseURL: "http://localhost:4000/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});


axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Server responded with error status
      const message =
        error.response.data?.error || "Something went wrong";
      return Promise.reject(new Error(message));
    }

    if (error.request) {
      // Request made but no response
      return Promise.reject(new Error("Server not reachable"));
    }

    // Something else
    return Promise.reject(new Error("Unexpected error"));
  }
);
