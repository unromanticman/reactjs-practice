const fetch = require('node-fetch');
const API_ROOT = 'https://localhost:8080';
let token = null;

const Auth = {
  current: () =>
    fetch(`${API_ROOT}${'/user'}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
  ,
  login: (email, password) =>
    fetch(`${API_ROOT}${'/users/login'}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: { user: { email, password } },
    }),
  register: (username, email, password) =>
    fetch(`${API_ROOT}${'/users/login'}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: {
        user: { username, email, password }
      },
    }),
  save: user =>
    fetch(`${API_ROOT}${'/user'}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: {
        user
      },
    })
};

export default {
  Auth,
  setToken: _token => { token = _token; }
};
