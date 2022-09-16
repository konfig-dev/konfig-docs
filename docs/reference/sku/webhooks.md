# Webhook Endpoints

Webhooks allow you to recieve data from Konfig by configuring an endpoint for
Konfig to push to. This is useful when you have existing infrastructure that you
use to run live operations for your game (i.e. existing Playfab or Proprietary backends)

# How to Configure a Webhook

Once a webhook is configured through our dashboard, any updates to your
[space](/reference/organization/space) will trigger a POST request to your
endpoint with the latest version of your store attached in the body so that you
can synchronize your backend.
