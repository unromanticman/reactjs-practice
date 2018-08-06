const fetch = require('node-fetch');
const API_ROOT = 'https://localhost:8080';

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
  Test
};
