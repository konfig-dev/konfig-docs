# Getting Started

1. Clone an example Konfig configuration repo. This repo contains specific
   configurations for producing custom supporting `.java` files to specially
   construct API requests.

```bash
❯ git clone https://github.com/konfig-dev/snaptrade-sdks.git
❯ cd snaptrade-sdks
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

5. Generate SDKs. Note that you need to provide your own OpenAPI Spec to generate the SDK.

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

Notice that every configured generator will produce its own directory based on its name. In this case we only configured the `java` generator so only a `java` SDK was generated.
