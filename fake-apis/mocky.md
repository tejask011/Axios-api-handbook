# Mocky

Mocky is a specialized tool that allows developers to design custom HTTP responses. This is particularly useful for testing how an application handles specific status codes or non-standard JSON structures.

---

## Technical Details

- **Description**: Customizable HTTP response generator.
- **Base URL**: `https://run.mocky.io/v3/`
- **Authentication**: Not required.
- **Encryption**: HTTPS enabled.

---

## Features

1. **Custom Status Codes**: Simulate success (200), client errors (404), or server failures (500).
2. **Flexible Content Types**: Support for JSON, XML, and plain text.
3. **Custom Payloads**: Define the exact structure of the data returned to the application.

---

## Implementation Example

```javascript
// Requesting a pre-defined custom response from Mocky
axios.get('https://run.mocky.io/v3/d62283e3-722c-4a37-9759-409159957388')
  .then(res => console.log('Mock Data:', res.data));
```

---

## Use Cases
- Testing application resilience during server downtime (simulating 5xx errors).
- Mocking backend responses during early-stage development.
- Validating the parsing logic for complex or unique data structures.
