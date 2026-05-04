# ReqRes

ReqRes is a hosted REST API that returns realistic data for frontend development testing. It is particularly useful for simulating user-related functionality such as registration and authentication.

---

## Technical Details

- **Description**: Hosted REST API for testing application logic and responses.
- **Base URL**: `https://reqres.in`
- **Authentication**: Not required (simulated only).
- **Encryption**: HTTPS enabled.

---

## Endpoints

| Endpoint | HTTP Method | Result |
| :--- | :--- | :--- |
| `/api/users` | GET | Paginated list of users |
| `/api/users/2` | GET | Single user data |
| `/api/users` | POST | Create a new user |
| `/api/register` | POST | Successful or unsuccessful registration |
| `/api/login` | POST | Successful or unsuccessful login |
| `/api/users/2` | DELETE | Delete user data |

---

## Implementation Example

```javascript
axios.post('https://reqres.in/api/login', {
    email: "eve.holt@reqres.in",
    password: "cityslicka"
})
.then(res => console.log('Login Token:', res.data.token));
```

## Sample Response (Successful Login)

```json
{
    "token": "QpwL5tke4Pnpja7X4"
}
```

---

## Use Cases
- Simulating and testing authentication flows (Login and Register).
- Implementing and verifying UI pagination logic using the `?page=n` parameter.
- Testing application behavior during network latency using the `?delay=n` parameter.
