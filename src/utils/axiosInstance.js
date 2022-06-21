import axios from 'axios';
import jwtDecode from 'jwt-decode';
import dayjs from 'dayjs';

const baseURL = 'http://127.0.0.1:8000/';

const authTokens = localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null;

const axiosInstance = axios.create({
  baseURL,
  headers: { Authorization: `Bearer ${authTokens?.access}` },
});

axiosInstance.interceptors.request.use(async (req) => {
  const user = jwtDecode(authTokens.access);
  const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;
  // console.log('isExpired:'+isExpired);
  if (!isExpired) return req;
  return req;
});

export default axiosInstance;
