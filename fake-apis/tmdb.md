# The Movie Database (TMDB)

The Movie Database (TMDB) is a community-built database for movies and TV shows. Its API provides access to extensive metadata and high-quality imagery, making it an ideal choice for building media-rich applications.

---

## Technical Details

- **Description**: Database for movie, TV, and actor metadata.
- **Base URL**: `https://api.themoviedb.org/3/`
- **Authentication**: Required (Personal API Key).
- **Encryption**: HTTPS enabled.

---

## Key Endpoints

| Endpoint | Data Returned |
| :--- | :--- |
| `/movie/popular` | Current popular movies. |
| `/movie/{movie_id}` | Metadata for a specific movie. |
| `/search/movie` | Search results for movies by title. |
| `/trending/{media_type}/{time_window}` | Trending media items. |

---

## Image Handling

TMDB provides relative paths (e.g., `poster_path`) in its responses. To display an image, you must combine a base URL, a size, and the file path.

- **Base Image URL**: `https://image.tmdb.org/t/p/`
- **Common Sizes**: `w500`, `w200`, `original`.
- **Full URL Example**: `https://image.tmdb.org/t/p/w500/or06vSaeEbX0uSTYBr78ar3pSl5.jpg`

---

## Implementation Example

```javascript
const API_KEY = 'your_api_key_here';

// Requesting popular movies
axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
  .then(res => {
    const movies = res.data.results;
    console.log('Top Result:', movies[0].title);
  });
```

## Sample Response (Movie Object)

```json
{
  "adult": false,
  "backdrop_path": "/or06vSaeEbX0uSTYBr78ar3pSl5.jpg",
  "id": 438631,
  "title": "Dune",
  "overview": "Paul Atreides, a brilliant and gifted young man born into a great destiny...",
  "poster_path": "/d5NXSklZ00pY9YpDmsmcHJDIuWs.jpg",
  "release_date": "2021-09-15",
  "vote_average": 7.9,
  "vote_count": 8542
}
```

---

## Use Cases
- Developing media catalogs or clones of services like Netflix.
- Implementing search functionality for large external databases.
- Managing and displaying dynamic high-resolution imagery.
