/**
 * EXAMPLE: GET Request
 * Purpose: Fetching data from a server.
 */

const axios = require('axios');

const fetchUsers = async () => {
  console.log('Fetching users...');
  
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    
    // Axios puts the response data in the .data property
    const users = response.data;
    
    console.log('Successfully fetched', users.length, 'users.');
    console.log('First user:', users[0].name);
    
  } catch (error) {
    console.error('Error fetching users:', error.message);
  }
};

fetchUsers();
