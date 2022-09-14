---
sidebar_position: 4
title: Instrument your Store [Dev]
---

# Instrument your Store

:::tip Before instrumenting your store
Go through the [Import Content](/tutorials/create-content), [Create a Type](/tutorials/create-a-type), and [Create a SKU](/tutorials/create-a-sku) tutorials.
:::

## Konfig's CDN

Konfig's CDN is used to retrieve currently scheduled SKUs for your store.
Konfig's CDN accepts query parameters to help you test SKUs for you game's `Development`, `Staging`, and `Production `environments.

[Learn more about our CDN here](/reference/cdn/what-is-a-cdn)

The following is an example of how you would retrieve the currently scheduled SKUs for your `Development` environment.

```python
import requests

url = "https://cdn.konfigthis.com/skus?env=Development&space=1"

headers = {"Accept": "application/json"}

response = requests.get(url, headers=headers)

print(response.text)
```

### Example

To see a browser-based example of a store that is hooked up to Konfig's CDN, see
[https://github.com/konfig-dev/konfig-demo](https://github.com/konfig-dev/konfig-demo).
