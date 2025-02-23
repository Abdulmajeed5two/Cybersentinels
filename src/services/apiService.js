import axios from 'axios';

const apiService = axios.create({
  baseURL: 'https://cybersentinels-7l25.onrender.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

apiService.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiService.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.error('Unauthorized, redirecting to login');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default apiService;
