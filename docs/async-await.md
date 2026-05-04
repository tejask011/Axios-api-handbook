# Async/Await vs Promises

Modern JavaScript offers two primary patterns for handling asynchronous operations: Promises (using `.then()`) and the `async/await` syntax. Both are fully supported by Axios.

---

## The Promise Pattern (.then)

This approach uses method chaining to handle successful results and errors.

```javascript
function getPost() {
  axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
      console.log('Success:', response.data);
    })
    .catch(error => {
      console.error('Error:', error);
    })
    .finally(() => {
      console.log('Request attempt finished.');
    });
}
```

---

## The Async/Await Pattern

Introduced in ES2017, this syntax allows asynchronous code to be written in a manner that resembles synchronous logic, improving readability.

```javascript
async function getPost() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    console.log('Success:', response.data);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    console.log('Request attempt finished.');
  }
}
```

### Advantages of Async/Await
- **Readability**: The code structure is cleaner, especially when handling multiple asynchronous calls.
- **Error Handling**: Allows the use of standard `try/catch` blocks.
- **Debugging**: Simplifies the process of stepping through code in a debugger.

---

## Sequential vs Parallel Requests

### Sequential Implementation
Each request waits for the preceding one to complete.
```javascript
const user = await axios.get('/user');
const posts = await axios.get(`/posts?userId=${user.id}`);
```

### Parallel Implementation
Both requests are initiated simultaneously, reducing total execution time.
```javascript
const [userRes, postsRes] = await Promise.all([
  axios.get('/user'),
  axios.get('/posts')
]);
```
