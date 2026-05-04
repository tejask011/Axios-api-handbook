# OpenWeatherMap

OpenWeatherMap is a widely recognized service for weather data. Its API provides access to current conditions, historical data, and forecasts, and is an industry standard for learning to handle authentication and complex query parameters.

---

## Technical Details

- **Description**: Real-time and historical weather data API.
- **Base URL**: `https://api.openweathermap.org/data/2.5/`
- **Authentication**: Required (Free API Key).
- **Encryption**: HTTPS enabled.

---

## Key Endpoints

| Endpoint | Data Returned |
| :--- | :--- |
| `/weather` | Current weather conditions for a targeted location. |
| `/forecast` | 5-day weather forecast in 3-hour increments. |
| `/air_pollution` | Current and historical air quality indices. |

---

## Implementation Example

```javascript
const API_KEY = 'your_api_key_here';
const city = 'London';

// Requesting metric units for temperature
axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
  .then(res => {
    console.log('City:', res.data.name);
    console.log('Current Temp:', res.data.main.temp);
  });
```

---

## Use Cases
- Building weather forecasting applications or dashboard widgets.
- Learning to manage and use multiple query parameters.
- Handling API-specific error messages, such as "City not found" (404).
