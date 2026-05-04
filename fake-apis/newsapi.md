# NewsAPI

NewsAPI is a RESTful service that aggregates news headlines and articles from over 80,000 global sources. It is an excellent resource for building applications that require real-time information retrieval.

---

## Technical Details

- **Description**: Global news aggregation and search API.
- **Base URL**: `https://newsapi.org/v2/`
- **Authentication**: Required (Free API Key).
- **Encryption**: HTTPS enabled.

---

## Key Endpoints

| Endpoint | Result |
| :--- | :--- |
| `/top-headlines` | Real-time breaking headlines for specific countries or categories. |
| `/everything` | Search capability for every article published within a specific period. |
| `/top-headlines/sources` | Metadata regarding the news sources currently indexed. |

---

## Implementation Example

```javascript
const API_KEY = 'your_api_key_here';

// Fetching top headlines from the United States
axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`)
  .then(res => {
    const topArticle = res.data.articles[0];
    console.log('Headline:', topArticle.title);
  });
```

---

## Use Cases
- Building news aggregators, reader applications, or custom dashboards.
- Learning how to implement complex searching and filtering by date or relevance.
- Displaying dynamic, media-rich card layouts with thumbnails and metadata.
