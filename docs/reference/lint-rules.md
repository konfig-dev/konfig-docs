# Lint Rules

Reference of linting rules for [Konfig's OAS Linter](https://www.npmjs.com/package/konfig-spectral-ruleset)

## operation-operationId

#### Example

```
Assign Operation#operationId to create better SDK method names.
```

#### Explanation

Konfig uses an [Operation Object's](https://swagger.io/specification/#operation-object) `operationId`
field to assign names to generated methods of SDKs. If no `operationId` is
assigned then SDK method names are generated from the HTTP method and path. For
developer-friendly SDKs it is important that you provide friendly method names
that are easy to discover and succint.

---

## potential-incorrect-type

#### Example

```
Could be integer type based on example. Ensure your types are correct.
```

#### Explanation

Every data type describe in your OAS must be correct to generate working SDKs. To ensure correctness,
Konfig's linter will check to see if examples could represent other data types.
In the following example the string `"3291231"` could represent an `integer`
type so a warning is thrown.

```yaml
components:
  schemas:
    User:
    type: object
    properties:
      id:
        type: string
        example: "3291231"
```

To ignore the error add the `x-konfig-ignore` to the top-level `info` object:

```yaml
info:
  title: Example API
  version: 1.0.0
  x-konfig-ignore:
    potential-incorrect-type: true
```

---

## path-params

#### Example

```
Paths "/a/{b}" and "/a/{c}" must not be equivalent.
```

#### Explanation

Two paths under the [PathObject](https://swagger.io/specification/#paths-object)
must be distinguishable by their path parameters so that the API server can
properly handle the correct operation.
