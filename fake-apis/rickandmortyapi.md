# Rick and Morty API

The Rick and Morty API is a RESTful and GraphQL API that provides access to data from the television series Rick and Morty. It is well-known for its clean implementation and high-quality documentation.

---

## Technical Details

- **Description**: TV series metadata API (Characters, Episodes, Locations).
- **Base URL**: `https://rickandmortyapi.com/api/`
- **Authentication**: Not required.
- **Encryption**: HTTPS enabled.

---

## Key Endpoints

| Endpoint | Result |
| :--- | :--- |
| `/character` | Full list of characters (paginated). |
| `/location` | Metadata for all locations within the show. |
| `/episode` | Metadata for all episodes within the show. |
| `/character/{id}` | Detailed data for a specific character. |

---

## Implementation Example

```javascript
// Requesting the second page of character data
axios.get('https://rickandmortyapi.com/api/character/?page=2')
  .then(res => {
    console.log('Results:', res.data.results);
    console.log('Next Page:', res.data.info.next);
  });
```

---

## Use Cases
- Practicing modern API pagination using next/previous link structures.
- Developing character directories or information wikis.
- Learning to implement multi-parameter filtering (e.g., name and status).
