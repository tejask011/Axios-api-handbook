/**
 * EXAMPLE: PUT and DELETE Requests
 * Purpose: Updating and removing resources.
 */

const axios = require('axios');

const updateAndDelete = async () => {
  const postId = 1;

  // 1. UPDATE (PUT)
  console.log('--- Updating Post ---');
  try {
    const updateData = {
      id: postId,
      title: 'Updated Title',
      body: 'This body has been updated.',
      userId: 1,
    };
    const putRes = await axios.put(`https://jsonplaceholder.typicode.com/posts/${postId}`, updateData);
    console.log('PUT Response:', putRes.data);
  } catch (error) {
    console.error('PUT Error:', error.message);
  }

  // 2. DELETE
  console.log('\n--- Deleting Post ---');
  try {
    const deleteRes = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    console.log('DELETE Status:', deleteRes.status); // Usually 200 or 204
    console.log('Post deleted successfully.');
  } catch (error) {
    console.error('DELETE Error:', error.message);
  }
};

updateAndDelete();
