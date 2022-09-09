---
sidebar_position: 4
---

# Instrument your Store

:::tip Before instrumenting your store
Go through the [Create Content](/tutorials/create-content), [Create a Type](/tutorials/create-a-type), and [Create a SKU](/tutorials/create-a-sku) tutorials.
:::

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

### Example

To see a web-based example of a store that is hooked up to Konfig's CDN, see [https://github.com/konfig-dev/konfig-demo](https://github.com/konfig-dev/konfig-demo/blob/master/pages/index.tsx#L69).
