# NASA Open APIs

NASA provides a suite of open APIs that offer access to data regarding space, Earth science, and planetary exploration. One of its most popular features is the Astronomy Picture of the Day (APOD).

---

## Technical Details

- **Description**: Access to NASA mission imagery and planetary data.
- **Base URL**: `https://api.nasa.gov/`
- **Authentication**: Required (Free API Key or DEMO_KEY).
- **Encryption**: HTTPS enabled.

---

## Key Endpoints

| Endpoint | Data Returned |
| :--- | :--- |
| `/planetary/apod` | Astronomy Picture of the Day. |
| `/mars-photos/api/v1/rovers/curiosity/photos` | High-resolution Mars rover imagery. |
| `/insight_weather` | Recent weather statistics from the Insight Mars Lander. |

---

## Implementation Example (APOD)

```javascript
const API_KEY = 'DEMO_KEY';

axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
  .then(res => {
    console.log('Title:', res.data.title);
    console.log('Image Source:', res.data.url);
  });
```

---

## Use Cases
- Developing educational or space-exploration themed applications.
- Practicing the implementation of high-resolution media and dynamic backgrounds.
- Learning to manage API rate limits (DEMO_KEY is limited to 30 requests per hour).
