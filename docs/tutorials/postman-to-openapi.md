# Create an OpenAPI Spec from Postman Collections

Follow this tutorial if:

- You don't have an OpenAPI Spec (OAS)
- You are using Postman Collections

:::caution
**Postman collections do not contain enough data to create quality quality a OAS**.
Manual work is required to make sure your OAS passes Konfig's linter.
:::

## 1. Setup

Ensure you have the `konfig-cli` installed by running

```bash
npm install -g konfig-cli
```

## 2. Export Postman Collection to JSON

Click the settings for the target Postman Collection and click "export":

![Export Postman](/img/export-postman-collection.png)

Choose `Collection v2.1` and click `Export`.

![Export Postman Button](/img/export-postman-collection-button.png)

## 3. Convert Exported Postman Collection to OpenAPI Spec

Once you have exported your collection to a `.json` file you can not convert it to an OAS `.yaml` file.

To do this simply run:

```bash
konfig p2o <path_to_your_exported_postman_collection>.json -f oas.yaml
```

You will see an output that looks something like this:

<details>
<summary>Example Output</summary>

```yaml
openapi: 3.0.0
info:
  title: Slack Web API
  version: 1.0.0
servers:
  - url: http://{{baseurl}}
components:
  securitySchemes:
    bearerAuth:
      type: http
      scheme: bearer
security:
  - bearerAuth: []
tags:
  - name: Admin API
    description: >-
      Use approval and provisioning APIs to help Slack Admins work more
      effectively.
# ... unnecessary details omitted
paths:
  /admin.users.setOwner:
    post:
      tags:
        - Admin API
      summary: admin users set Owner
      description: >-
        Set an existing guest, regular user, or admin user to be a workspace
        owner.
      requestBody:
        content:
          application/x-www-form-urlencoded:
            schema:
              type: object
              properties:
                team_id:
                  type: string
                  description: The ID (`T1234`) of the workspace.
                  example: <string>
                user_id:
                  type: string
                  description: Id of the user to promote to owner.
                  example: <string>
      parameters:
        - name: token
          in: header
          schema:
            type: string
          description: "(Required) Authentication token. Requires scope: `admin.users:write`"
          example: <string>
        - name: Content-Type
          in: header
          schema:
            type: string
          example: application/x-www-form-urlencoded
# ... unnecessary details omitted
```

</details>

:::caution
**The output of `konfig p2o` is low quality and should not be used to
publish SDKs**. To ensure Konfig can generate high quality SDKs you must make
sure your OAS passes Konfig's linter. Follow directions on [how to run Konfig's
linter here](/tutorials/setup-linting).
:::
