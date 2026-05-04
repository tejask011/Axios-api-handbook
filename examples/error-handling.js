/**
 * EXAMPLE: Advanced Error Handling
 * Purpose: Catching and identifying different types of errors.
 */

const axios = require('axios');

const simulateError = async (url) => {
  console.log(`\nRequesting: ${url}`);
  try {
    const response = await axios.get(url);
    console.log('Success:', response.status);
  } catch (error) {
    if (error.response) {
      // Server responded with a status other than 2xx
      console.error('SERVER ERROR!');
      console.error('Status:', error.response.status);
      console.error('Message:', error.response.data);
    } else if (error.request) {
      // Request was made but no response received (e.g., timeout, no internet)
      console.error('NETWORK ERROR!');
      console.error('No response received from the server.');
    } else {
      // Something happened while setting up the request
      console.error('CONFIG ERROR!');
      console.error('Error Message:', error.message);
    }
  }
};

const run = async () => {
  // 1. Simulate 404 (Not Found)
  await simulateError('https://jsonplaceholder.typicode.com/invalid-endpoint');

  // 2. Simulate Network Error (Invalid Domain)
  await simulateError('https://this-domain-does-not-exist-123.com');
};

run();
