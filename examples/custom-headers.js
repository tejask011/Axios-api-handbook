/**
 * EXAMPLE: Custom Headers and API Keys
 * Purpose: Learning how to send authorization or other headers.
 */

const axios = require('axios');

// NOTE: This example uses 'The Cat API'. 
// While it works for simple searches without a key, 
// using a key unlocks more features.

const fetchCatWithHeader = async () => {
  console.log('Fetching a random cat image with custom headers...');

  // In a real app, this would be an environment variable
  const API_KEY = 'DEMO-API-KEY'; 

  try {
    const response = await axios.get('https://api.thecatapi.com/v1/images/search', {
      headers: {
        'x-api-key': API_KEY,
        'Content-Type': 'application/json',
        'User-Agent': 'AxiosLearningHub/1.0'
      },
      params: {
        limit: 1,
        size: 'full'
      }
    });

    const catData = response.data[0];
    console.log('Success!');
    console.log('Cat Image URL:', catData.url);
    console.log('Image Dimensions:', `${catData.width}x${catData.height}`);

  } catch (error) {
    console.error('Error fetching cat:', error.message);
  }
};

fetchCatWithHeader();
