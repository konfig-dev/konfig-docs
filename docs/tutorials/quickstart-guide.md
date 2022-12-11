# Generate SDKs from an example repository

1. Clone the example Konfig configuration repo
   (https://github.com/konfig-dev/getting-started-example). This particular repo contains
   the configuration for producing Java, TypeScript, and Python SDKs.

```bash
❯ git clone https://github.com/konfig-dev/getting-started-example.git
❯ cd getting-started-example
```

This repo contains a `konfig.yaml` file which contains a configuration for
Konfig to generate your SDKs.

```bash
❯ tree
.
└── konfig.yaml

0 directories, 1 file
```

The `konfig.yaml` contains configurations for preprocessing your OpenAPI Spec
(OAS) and generator-specific values such as `groupId` and `artifactId` for
`java`.

```bash
❯ cat konfig.yaml
allObjectsHaveAdditionalProperties:
  requestBody: false
generators:
  java:
    version: 1.0.0
    groupId: com.konfigthis
    artifactId: tutorial-java-sdk
  python:
    version: 1.0.0
    packageName: tutorial_client
    projectName: tutorial-python-sdk
  typescript:
    version: 1.0.0
    npmName: tutorial-typescript-sdk
    git:
      userId: MY_GIT_USER_ID
      repoId: MY_GIT_REPO_ID
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

5. Generate SDKs. You need to provide your own OAS to generate SDKs.

```
❯ konfig generate -o /tmp/sdks -c ./ -i PATH_TO_OPENAPI_SPEC
Generating java, python, typescript SDKs... done
Downloading 3 SDKs... done
Deleting output directory... done
Extracting SDKs... done

❯ ls /tmp/sdks
java                    python-prior            typescript-axios

❯ ls /tmp/sdks/java
README.md               build.sbt               gradle                  gradlew.bat             src
api                     docs                    gradle.properties       pom.xml
build.gradle            git_push.sh             gradlew                 settings.gradle
```

Every generator will produce a directory named after itself.
