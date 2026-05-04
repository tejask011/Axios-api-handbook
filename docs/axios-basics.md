# Axios Basics

Axios is a lightweight, promise-based HTTP client suitable for use in the browser and Node.js. This guide covers installation and basic implementation.

---

## Installation

Axios can be added to your project using a package manager or a CDN.

### NPM / Yarn
```bash
npm install axios
# or
yarn add axios
```

### CDN (HTML)
```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

---

## Basic Syntax

The most direct way to initiate a request is by passing a configuration object to the `axios()` function.

```javascript
axios({
  method: 'get',
  url: 'https://jsonplaceholder.typicode.com/todos/1',
})
  .then(function (response) {
    console.log(response.data);
  });
```

### Method Aliases
Axios provides convenient aliases for common HTTP methods:
- `axios.get(url[, config])`
- `axios.post(url[, data[, config]])`
- `axios.put(url[, data[, config]])`
- `axios.patch(url[, data[, config]])`
- `axios.delete(url[, config])`

---

## The Response Object

Upon a successful request, Axios returns a response object containing the following:
- `data`: The payload returned by the server (automatically parsed from JSON).
- `status`: The HTTP status code.
- `statusText`: The HTTP status message.
- `headers`: The response headers.
- `config`: The configuration object provided for the request.
- `request`: The actual request object.

---

## Global Configuration

For complex applications, you can create a custom instance of Axios with a predefined base URL and global headers.

```javascript
const api = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 1000,
  headers: {'X-Custom-Header': 'value'}
});

// Implementation using the custom instance
api.get('/users').then(res => console.log(res.data));
```
