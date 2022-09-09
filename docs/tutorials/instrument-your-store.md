---
sidebar_position: 4
---

Konfig's CDN is used to retrieve currently scheduled SKUs for your store.
Konfig's CDN accepts query parameters to help you test SKUs for you game's `Development`, `Staging`, and `Production `environments. To explore, see our [API Reference](https://docs.konfigthis.com/reference/get_skus)

The following is an example of how you would retrieve the currently scheduled SKUs for your `Development` environment.

```python
import requests

url = "https://cdn.konfigthis.com/skus?env=Development&space=1"

headers = {"Accept": "application/json"}

response = requests.get(url, headers=headers)

print(response.text)
```
