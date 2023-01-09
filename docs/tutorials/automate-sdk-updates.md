# Automate SDK Updates

Today there are two ways of automating SDK updates with Konfig:

- [GitHub Action](automate-sdk-updates#github-action) (push)
- [Public Endpoint serving your OpenAPI Spec](automate-sdk-updates#public-endpoint-serving-your-openapi-spec) (poll)

## GitHub Action

Konfig will provide a GitHub workflow that pushes any changes to your OpenAPI Spec
to Konfig upon pushes to a target branch.

## Public Endpoint serving your OpenAPI Spec

Konfig will periodically poll for any updates to your OpenAPI Spec being served
at a public endpoint.

## Versioning and Publishing

Once an update is detected, Konfig will automatically generate a new version
following strict semantic versioning based on the diff between your current and
previous OpenAPI Spec. Konfig will also publish to [Package
Managers](/reference/supported-package-managers)
