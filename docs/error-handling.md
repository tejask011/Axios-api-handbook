# Error Handling in Axios

Implementing robust error handling is critical for building reliable applications. Axios provides detailed information when a network request fails.

---

## Using Try/Catch

When utilizing `async/await`, the standard approach for handling errors is with a `try...catch` block.

```javascript
async function fetchData() {
  try {
    const response = await axios.get('https://api.invalid-url.com');
    console.log(response.data);
  } catch (error) {
    console.error('An error occurred during the request:', error.message);
  }
}
```

---

## The Error Object

When an error occurs, Axios returns an object that helps identify the cause of the failure:

```javascript
axios.get('/user/12345')
  .catch(function (error) {
    if (error.response) {
      // The server responded with a status code outside the 2xx range
      console.log('Response Data:', error.response.data);
      console.log('Response Status:', error.response.status);
    } else if (error.request) {
      // The request was made but no response was received
      console.log('Request Object:', error.request);
    } else {
      // An error occurred during request setup
      console.log('Setup Error:', error.message);
    }
  });
```

---

## Handling Specific Status Codes

Application logic can be tailored based on the specific HTTP status code returned by the server.

```javascript
try {
  await axios.get('/protected-resource');
} catch (error) {
  if (error.response.status === 401) {
    console.error('Authentication required.');
  } else if (error.response.status === 404) {
    console.error('Resource not found.');
  }
}
```

---

## Global Error Interceptors

You can handle recurring errors, such as session expiration, in a centralized location using Axios interceptors.

```javascript
axios.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 401) {
      // Logic for session expiration
      console.log('Session expired. Redirecting to login.');
    }
    return Promise.reject(error);
  }
);
```
