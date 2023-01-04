# Generate SDKs from an example repository

1. Clone the example Konfig configuration repo
   (https://github.com/konfig-dev/getting-started-example). This particular repo contains
   the configuration for producing Java, TypeScript, CSharp, Swift, Objective C, Kotlin, Go, PHP, and Python SDKs.

```bash
❯ git clone https://github.com/konfig-dev/getting-started-example.git
❯ cd getting-started-example
```

This repo contains a `konfig.yaml` file, Konfig's linting ruleset, VSCode settings, and logo image for publishing.

```bash
❯ tree -a
.
├── .git
├── .konfig
│   ├── ruleset-version
│   └── ruleset.js
├── .spectral.yaml
├── .vscode
│   ├── extensions.json
│   └── settings.json
├── konfig.yaml
├── logo.png
└── petstore.yaml
```

The `konfig.yaml` contains configurations for preprocessing your OpenAPI Spec
(OAS) and generator-specific values such as `groupId` and `artifactId` for
`java`.

```bash
❯ cat konfig.yaml
allObjectsHaveAdditionalProperties:
  requestBody: false
outputDirectory: /tmp/acme-sdks-out
specPath: petstore.yaml
generators:
  java:
    version: 1.0.0
    groupId: com.acme
    artifactId: acme-java-sdk
    outputDirectory: java
  python:
    version: 1.0.0
    packageName: acme_client
    projectName: acme-python-sdk
    outputDirectory: python
  typescript:
    version: 1.0.0
    npmName: acme-typescript-sdk
    outputDirectory: typescript
    git:
      userId: MY_GIT_USER_ID
      repoId: MY_GIT_REPO_ID
  csharp:
    version: 1.0.0
    packageName: Acme.Net
    outputDirectory: csharp
    logoPath: logo.png
  swift:
    version: 1.0.0
    projectName: Acme
    podAuthors: acme.com
    outputDirectory: swift
  objc:
    version: 1.0.0
    podName: AcmeClient
    authorName: acme.com
    authorEmail: engineering@acme.com
    classPrefix: A
    outputDirectory: objc
  kotlin:
    version: 1.0.0
    groupId: com.acme
    artifactId: acme-kotlin-sdk
    outputDirectory: kotlin
  go:
    version: 1.0.0
    packageName: acme
    outputDirectory: go
  php:
    version: 1.0.0
    packageName: acme-php
    outputDirectory: php
```

2. Install [Konfig's CLI](https://www.npmjs.com/package/konfig-cli).

```bash
❯ npm install -g konfig-cli
```

3. Signup for an account https://dash.konfigthis.com/signup.

4. Login through the CLI

```bash
❯ konfig login
Logging into https://api.konfigthis.com
Email: dylan@konfigthis.com
Password: **************
Successfuly logged in as dylan@konfigthis.com
```

5. Generate SDKs.

```
❯ konfig generate
Output directory set to: /tmp/acme-sdks-out
Generating go, objc, kotlin, php, swift, csharp, java, python, typescript SDKs... done
Downloading 9 SDKs... done
Deleting output directory... done
Creating output directory... done
Extracting SDKs... done
Generating snippet for Python... done
Deleting contents of existing directory "kotlin"... done
Copying Kotlin SDK to "kotlin"... done
Deleting contents of existing directory "objc"... done
Copying Objective-C SDK to "objc"... done
Deleting contents of existing directory "go"... done
Copying Go SDK to "go"... done
Deleting contents of existing directory "php"... done
Copying PHP SDK to "php"... done
Deleting contents of existing directory "swift"... done
Copying Swift SDK to "swift"... done
Deleting contents of existing directory "csharp"... done
Copying C# SDK to "csharp"... done
Deleting contents of existing directory "java"... done
Copying Java SDK to "java"... done
Deleting contents of existing directory "python"... done
Copying Python SDK to "python"... done
Deleting contents of existing directory "typescript"... done
Copying Typescript SDK to "typescript"... done

❯ ls java
README.md               build.gradle            docs                    gradle                  gradlew                 pom.xml                 src
api                     build.sbt               git_push.sh             gradle.properties       gradlew.bat             settings.gradle
```

Every generator is configured to produce a directory named after itself in the example `konfig.yaml`.

:::info
The example OpenAPI Spec also contains a warning from our lint rules that you can diagnose by running `konfig lint petstore.yaml`:

```
❯ konfig lint petstore.yaml

/getting-started-example/petstore.yaml
 389:10  warning  operation-operationId  Assign Operation#operationId to create better SDK method names.  paths./user.post

✖ 1 problem (0 errors, 1 warning, 0 infos, 0 hints)
```

We suggest that your OpenAPI Spec should pass all of our lint rules to generate quality SDKs.
:::
