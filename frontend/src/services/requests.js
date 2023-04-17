import axios from 'axios';

const api = axios.create({
  baseURL: 'https://web-scraping-backend-wine.vercel.app/',
});

export const requestData = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

export default api;
