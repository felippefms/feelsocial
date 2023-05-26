const axios = require('axios').default;

export const instance = axios.create({
  baseURL: 'https://randomuser.me/api',
  timeout: 5000,
});