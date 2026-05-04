# Axios API Handbook

The Axios API Handbook is a comprehensive technical reference for developers who want to master HTTP requests in JavaScript. This repository provides in-depth guides on the Axios library combined with detailed, local documentation for 15 of the most popular public APIs.

[![Axios Version](https://img.shields.io/badge/axios-v1.6.0-blue.svg)](https://axios-http.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## Why this Handbook?

While massive directories like [public-apis](https://github.com/public-apis/public-apis) exist to catalog thousands of endpoints, they often lack the technical depth required for immediate implementation. 

This handbook is designed to bridge that gap. It doesn't just list APIs; it provides:
- **Local Documentation**: Full technical details, including base URLs and sample responses, so you don't have to leave the repository.
- **Implementation Standards**: Practical JavaScript examples using Axios to show exactly how to handle authentication, headers, and data parsing.
- **Educational Foundation**: Guides on the core concepts of REST, Promises, and Async/Await to ensure you understand the "why" behind the code.

It is a curated, high-quality resource meant for developers who value implementation speed and technical clarity.

---

## Table of Contents

- [What is Axios?](#what-is-axios)
- [Why Use Fake APIs?](#why-use-fake-apis)
- [Repository Structure](#repository-structure)
- [Installation and Setup](#installation-and-setup)
- [Quick Start Guide](#quick-start-guide)
- [Core Documentation](#core-documentation)
- [Featured Fake APIs](#featured-fake-apis)
- [Mini Projects](#mini-projects)
- [Resources and Further Reading](#resources-and-further-reading)

---

## What is Axios?

Axios is a promise-based HTTP client for the browser and Node.js. It is preferred in modern web development for its clean syntax, automatic JSON transformation, and robust error handling.

### Key Features
- Browser support for XMLHttpRequests.
- Node.js support for http requests.
- Full Promise API compatibility.
- Request and response interception.
- Automatic transformation of JSON data.
- Built-in support for request cancellation.

---

## Why Use Fake APIs?

Mock and public APIs are essential tools for development and learning:
- **Prototyping**: Build and test user interfaces before the backend is ready.
- **Testing**: Verify application behavior under different data scenarios and error conditions.
- **Education**: Practice making network requests without the overhead of setting up a private server.
- **Predictability**: Consistent data structures for reliable development.

---

## Repository Structure

- `docs/`: In-depth guides on API fundamentals and Axios usage.
- `examples/`: Executable JavaScript snippets for various HTTP methods.
- `fake-apis/`: Detailed documentation for popular free mock services.
- `mini-projects/`: Functional applications demonstrating Axios in real-world scenarios.
- `resources.md`: A curated list of public APIs and development tools.

---

## Installation and Setup

Axios can be integrated into your project via package managers or a CDN.

### NPM
```bash
npm install axios
```

### CDN
```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

---

## Quick Start Guide

The following example demonstrates how to fetch data from a public API using an asynchronous function.

```javascript
const axios = require('axios');

async function getUser() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
    console.log('User Data:', response.data);
  } catch (error) {
    console.error('Request failed:', error.message);
  }
}

getUser();
```

---

## Core Documentation

Detailed technical guides located in the `docs/` folder:
- [Axios Basics](docs/axios-basics.md)
- [API Concepts](docs/api-concepts.md)
- [HTTP Methods](docs/http-methods.md)
- [Error Handling](docs/error-handling.md)
- [Async/Await vs Promises](docs/async-await.md)

---

## Featured Fake APIs

This repository provides local documentation for several high-quality APIs.

### General Purpose Mock APIs
- **[JSONPlaceholder](fake-apis/jsonplaceholder.md)**: Standard REST API for general CRUD testing.
- **[ReqRes](fake-apis/reqres.md)**: Designed for testing authentication and user management flows.
- **[DummyJSON](fake-apis/dummyjson.md)**: Provides datasets including products, carts, and users.
- **[FakerAPI](fake-apis/fakerapi.md)**: Generates large-scale localized datasets for performance testing.
- **[Mocky](fake-apis/mocky.md)**: Allows for the creation of custom HTTP responses and status codes.
- **[RandomUser.me](fake-apis/randomuser.md)**: Generates realistic, dynamic user profiles.

### Specialized Data APIs
- **[PokeAPI](fake-apis/pokeapi.md)**: Navigation of complex, nested JSON data.
- **[The Cat API](fake-apis/thecatapi.md)**: Image handling and custom header usage.
- **[Rick and Morty API](fake-apis/rickandmortyapi.md)**: Implementation of pagination and filtering.
- **[CoinGecko](fake-apis/coingecko.md)**: Real-time cryptocurrency market data.
- **[Open Library](fake-apis/openlibrary.md)**: Massive catalog of books and authors.

### External APIs Requiring Authentication
- **[OpenWeatherMap](fake-apis/openweathermap.md)**: Weather data and query parameter practice.
- **[TMDB](fake-apis/tmdb.md)**: Movie and TV metadata and imagery.
- **[NASA API](fake-apis/nasa.md)**: Space imagery and planetary data.
- **[NewsAPI](fake-apis/newsapi.md)**: Global news headlines and search.

---

## Mini Projects

Functional implementations showing Axios in action:
1. **[Todo App](mini-projects/todo-app/)**: A CRUD application built with JSONPlaceholder.
2. **[User Dashboard](mini-projects/user-dashboard/)**: A paginated user viewer using ReqRes.

---

## Contributing

Contributions are welcome. If you have an example or an API guide to add, please open a Pull Request.
