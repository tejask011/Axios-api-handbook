# HTTP Methods with Axios

This document outlines how to implement the most common HTTP methods using Axios to interact with RESTful resources.

---

## GET: Retrieving Data

The GET method is used to retrieve information from a specified resource.

```javascript
axios.get('https://jsonplaceholder.typicode.com/posts/1')
  .then(res => console.log(res.data))
  .catch(err => console.error(err));
```

---

## POST: Creating Data

The POST method is used to send data to a server to create a new resource.

```javascript
const newPost = {
  title: 'Post Title',
  body: 'Post content description.',
  userId: 1
};

axios.post('https://jsonplaceholder.typicode.com/posts', newPost)
  .then(res => console.log('Resource Created:', res.data))
  .catch(err => console.error(err));
```

---

## PUT and PATCH: Updating Data

- **PUT**: Replaces the entire targeted resource with the provided payload.
- **PATCH**: Updates only the specific fields provided in the payload.

### Example (PUT)
```javascript
axios.put('https://jsonplaceholder.typicode.com/posts/1', {
  title: 'Updated Title'
})
  .then(res => console.log('Update Success:', res.data));
```

---

## DELETE: Removing Data

The DELETE method removes the specified resource from the server.

```javascript
axios.delete('https://jsonplaceholder.typicode.com/posts/1')
  .then(res => console.log('Deletion Successful'))
  .catch(err => console.error('Error:', err));
```

---

## Practical Application

In a typical user management system:
1. **GET**: Retrieve the current user profile.
2. **PATCH**: Update specific fields like a user's bio or display name.
3. **POST**: Submit a new support ticket or comment.
4. **DELETE**: Remove an old notification or deactivate an account.
