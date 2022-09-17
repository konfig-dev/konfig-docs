---
title: Webhook Endpoints
sidebar_position: 6
---

# Webhook Endpoints

Webhooks allow you to recieve data from Konfig by configuring an endpoint for
Konfig to push to. This is useful when you have existing infrastructure that you
use to run live operations for your game (i.e. existing Playfab or Proprietary backends)

## How to Configure a Webhook

Once a webhook is configured through our dashboard, any updates to your
[space](/reference/organization/space) will trigger a `POST` request to your
endpoint with the latest version of your store attached in the body so that you
can synchronize your backend.

## HTTP Headers

Konfig will also send a `Konfig-Signature` header so you can verify that the
request came from Konfig. See the **Settings** page to create a signing secret.
To compute the
[HMAC_SHA256](https://www.devglan.com/online-tools/hmac-sha256-online) signature
of the [minified JSON](https://codebeautify.org/jsonminifier) request body (i.e.
latest JSON payload of your store) and the generated signing secret.

## Webhook Retry Logic

Konfig will retry a webhook if your endpoint fails to return an [HTTP
200](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200) response
code. Konfig retries a total of 5 times (initial request + 5) after the initial
request. Konfig employs [exponential
backoff](https://en.wikipedia.org/wiki/Exponential_backoff) to determine the
delay between retries.
