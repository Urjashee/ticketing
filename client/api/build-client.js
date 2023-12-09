import axios from 'axios';

export default ({ req }) => {
  if (typeof window === 'undefined') {
    // We are on the server

    return axios.create({
      baseURL:
        'http://10.107.123.154',
      headers: req.headers,
    });
  } else {
    // We must be on the browser
    return axios.create({
      baseUrl: '/',
    });
  }
};
