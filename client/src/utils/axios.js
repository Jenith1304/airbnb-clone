import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: "https://airbnb-clone-irqx.onrender.com/api",
  withCredentials: true,
});

export default axiosInstance;
