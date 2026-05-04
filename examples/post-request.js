/**
 * EXAMPLE: POST Request
 * Purpose: Sending data to create a new resource.
 */

const axios = require('axios');

const createPost = async () => {
  console.log('Creating a new post...');

  const postData = {
    title: 'Hello Axios!',
    body: 'This post was created using an Axios POST request.',
    userId: 1,
  };

  try {
    // axios.post(url, data, config)
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', postData);

    console.log('Status Code:', response.status); // Should be 201 (Created)
    console.log('Response Data:', response.data);
    
  } catch (error) {
    console.error('Error creating post:', error.message);
  }
};

createPost();
