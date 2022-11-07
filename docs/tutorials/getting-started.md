# Getting Started

1. Clone the example Konfig configuration repo
   (https://github.com/konfig-dev/snaptrade-sdks). This particular repo contains
   specific configurations for producing custom supporting `.java` files to
   specially construct API requests.

```bash
❯ git clone https://github.com/konfig-dev/snaptrade-sdks.git
❯ cd snaptrade-sdks
```

This repo contains a `konfig.yaml` file which contains a configuration for Konfig to generate your SDKs. It also has a `templates/` directory which hold template files for different generators.

```bash
❯ tree
.
├── konfig.yaml
└── templates
    └── java
        ├── ApiClient.mustache
        ├── Configuration.mustache
        ├── JSON.mustache
        ├── build.gradle.mustache
        └── gitignore.mustache

2 directories, 6 files
```

The `konfig.yaml` contains configurations for preprocessing your OpenAPI Spec
(OAS) and generator-specific values such as `groupId` and `artifactId` for
`java`.

```bash
❯ cat konfig.yaml
filterQueryParams:
  - clientId
  - timestamp
filterTags:
  - Webhooks
allObjectsHaveAdditionalProperties: true
generators:
  java:
    files:
      gitignore.mustache:
        destinationFilename: .gitignore
      Configuration.mustache:
        destinationFilename: src/main/java/com/snaptrade/client/Configuration.java
      ApiClient.mustache:
        destinationFilename: src/main/java/com/snaptrade/client/ApiClient.java
      build.gradle.mustache:
        destinationFilename: build.gradle
      JSON.mustache:
        destinationFilename: src/main/java/com/snaptrade/client/JSON.java
    groupId: com.snaptrade
    artifactId: snaptrade-java-sdk-cli-generated
```

2. Install Konfig's CLI.

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

5. Generate SDKs. You need to provide your own OAS to generate SDKs.

```
❮ konfig generate -o /tmp/snaptrade-sdks -c ./ -i PATH_TO_OPENAPI_SPEC
Generating SDKs... done
Downloading SDKs... done
Extracting SDKs... done

❯ ls /tmp/snaptrade-sdks/
java

❯ ls /tmp/snaptrade-sdks/java
README.md               docs                    gradlew                 src
api                     git_push.sh             gradlew.bat
build.gradle            gradle                  pom.xml
build.sbt               gradle.properties       settings.gradle
```

Every generator will produce its a directory with its name. In this case we only
configured the `java` generator so only a `java` directory was created.
