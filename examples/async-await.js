/**
 * EXAMPLE: Async/Await with Parallel Requests
 * Purpose: Fetching multiple resources efficiently.
 */

const axios = require('axios');

const fetchDashboardData = async () => {
  console.log('Fetching dashboard data in parallel...');
  
  const startTime = Date.now();

  try {
    // Promise.all executes both requests at the same time
    const [usersRes, postsRes] = await Promise.all([
      axios.get('https://jsonplaceholder.typicode.com/users?_limit=3'),
      axios.get('https://jsonplaceholder.typicode.com/posts?_limit=3')
    ]);

    const duration = Date.now() - startTime;

    console.log(`\nResults (Fetched in ${duration}ms):`);
    
    console.log('\n--- Users ---');
    usersRes.data.forEach(user => console.log(`- ${user.name}`));

    console.log('\n--- Recent Posts ---');
    postsRes.data.forEach(post => console.log(`- ${post.title}`));

  } catch (error) {
    console.error('Failed to fetch dashboard data:', error.message);
  }
};

fetchDashboardData();
