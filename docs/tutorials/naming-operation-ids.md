# Naming your Operation IDs for better SDK Method Names

## What is an Operation ID?

Every [Operation Object](https://swagger.io/specification/#operation-object) has
an optional field called `operationId` that is globally unique. This field is
required to create SDKs with pleasing method names. The OpenAPI Specification
does not require these IDs by default but Konfig's linter will recommend that
you fill them out.

## How to name your Operation ID

The best way to name your operation ID is by prefixing it with the
[Tag](https://swagger.io/specification/#tag-object) that is specified in the
Operation Object and an underscore character `_`.

:::note
Note that operation IDs must be globally unique which is why prefixing it with the tag is helpful for avoiding naming conflicts.
:::

For example:

```yaml
paths:
  /dog:
    post:
      tags:
        - Dog
      operationId: Dog_create
  /cat:
    post:
      tags:
        - Cat
      operationId: Cat_create
```

This will generate pleasing SDK method names like so:

```typescript
await cat.create();
await dog.create();
```
