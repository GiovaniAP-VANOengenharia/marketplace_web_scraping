import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000',
});

// export const requestData = async (endpoint) => {
//   const { data } = await api.get(endpoint);
//   return data;
// };

export const requestData = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

export default api;
