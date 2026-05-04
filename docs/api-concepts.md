# API Concepts

Understanding the core concepts of web APIs (Application Programming Interfaces) is essential before working with tools like Axios.

---

## What is a REST API?

REST (Representational State Transfer) is an architectural style that defines standards for communication between systems on the web.

### Key Characteristics
1. **Stateless**: Each request from a client to a server must contain all necessary information to understand and complete the request.
2. **Client-Server**: The client and server are independent. The client handles the interface, and the server handles data storage and processing.
3. **Resources**: Everything is treated as a "resource" (e.g., a User, a Post, an Image) and is identified by a unique URL.

---

## Anatomy of an HTTP Request

An HTTP request consists of several key components:

### 1. Endpoint (URL)
The destination address where the resource is located.
Example: `https://api.example.com/v1/users`

### 2. Method (Verb)
The action to be performed on the resource:
- **GET**: Retrieve data.
- **POST**: Create new data.
- **PUT/PATCH**: Update existing data.
- **DELETE**: Remove data.

### 3. Headers
Metadata sent with the request, such as authentication tokens or content type definitions.
```javascript
{
  "Content-Type": "application/json",
  "Authorization": "Bearer your-token-here"
}
```

### 4. Body (Payload)
The data sent to the server, typically used with POST, PUT, and PATCH requests.

---

## HTTP Status Codes

Servers use status codes to indicate the outcome of a request:

| Code Range | Meaning | Example |
| :--- | :--- | :--- |
| **2xx** | Success | 200 OK, 201 Created |
| **3xx** | Redirection | 301 Moved Permanently |
| **4xx** | Client Error | 404 Not Found, 401 Unauthorized |
| **5xx** | Server Error | 500 Internal Server Error |

---

## The Request-Response Cycle

The request-response cycle is a standard process:
1. **Request**: The client sends an HTTP request to the server.
2. **Processing**: The server receives the request, processes the logic, and interacts with a database if necessary.
3. **Response**: The server sends an HTTP response back to the client, including a status code and data (usually in JSON format).
