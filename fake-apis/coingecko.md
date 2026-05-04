# CoinGecko API

CoinGecko is an independent cryptocurrency data aggregator. Their public API provides access to market data, including real-time prices, market capitalization, and trading volume.

---

## Technical Details

- **Description**: Cryptocurrency market data.
- **Base URL**: `https://api.coingecko.com/api/v3/`
- **Authentication**: Not required for public endpoints.
- **Encryption**: HTTPS enabled.

---

## Key Endpoints

| Endpoint | Result |
| :--- | :--- |
| `/simple/price` | Current price of specific coins. |
| `/coins/markets` | List of coins with comprehensive market data. |
| `/coins/{id}` | Detailed metadata for a specific coin. |
| `/search/trending` | List of trending coins. |

---

## Implementation Example

```javascript
// Fetching the price of Bitcoin and Ethereum in USD
axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd')
  .then(res => {
    console.log('Bitcoin (USD):', res.data.bitcoin.usd);
    console.log('Ethereum (USD):', res.data.ethereum.usd);
  });
```

---

## Use Cases
- Building cryptocurrency trackers or portfolio management tools.
- Learning how to process multi-item query parameters.
- Implementing data visualization for market trends.
