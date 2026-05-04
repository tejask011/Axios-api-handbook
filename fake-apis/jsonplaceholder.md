# JSONPlaceholder

JSONPlaceholder is a free, online REST API that provides mock data for development and testing purposes. It is a standard choice for developers who need to quickly prototype applications without a backend.

---

## Technical Details

- **Description**: Public mock REST API for general testing.
- **Base URL**: `https://jsonplaceholder.typicode.com`
- **Authentication**: Not required.
- **Encryption**: HTTPS enabled.

---

## Endpoints

| Endpoint | HTTP Method | Data Returned |
| :--- | :--- | :--- |
| `/posts` | GET | 100 posts |
| `/comments` | GET | 500 comments |
| `/albums` | GET | 100 albums |
| `/photos` | GET | 5000 photos |
| `/todos` | GET | 200 todos |
| `/users` | GET | 10 users |

---

## Implementation Example

```javascript
axios.get('https://jsonplaceholder.typicode.com/users/1')
  .then(res => console.log(res.data));
```

## Sample Response

```json
{
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
}
```

---

## Use Cases
- Testing basic CRUD operations (Create, Read, Update, Delete).
- Prototyping list views and detail pages.
- Verifying error handling by requesting non-existent resources (e.g., `/posts/999`).
