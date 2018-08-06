const fetch = require('node-fetch');
const API_ROOT = 'https://localhost:8080';
let token = null;

const Test = {
  getTestData: () =>
    fetch('https://facebook.github.io/react-native/movies.json', {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    })
}

export default {
  Test,
  setToken: _token => { token = _token; },
  getToken: () => { return token }
};
