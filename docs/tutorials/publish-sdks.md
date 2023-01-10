# Publish SDKs

Konfig makes it easy to publish SDKs through our [CLI](https://www.npmjs.com/package/konfig-cli#konfig-publish).

```bash
❯ konfig publish --help
Publish SDKs

USAGE
  $ konfig publish -g <value> [-d] [-t]

FLAGS
  -d, --debug
  -g, --generator=<value>  (required)
  -t, --test

DESCRIPTION
  Publish SDKs

EXAMPLES
  $ konfig publish
```

To publish SDKs simply `cd` into your SDK repository and provide the `-g` flag a comma separated list of generator names.

Use the `-d` flag to see what commands will be run to publish each SDK:

```bash
❯ konfig publish -g go,python,java,typescript,csharp -d
DEBUG: mvn clean deploy
DEBUG: rm -rf dist/
DEBUG: python3 -m build
DEBUG: twine check dist/*
DEBUG: twine upload dist/*
DEBUG: npm publish
DEBUG: dotnet pack
DEBUG: dotnet nuget push src/Acme.Net/bin/Debug/Acme.Net.1.0.0.nupkg --api-key $NUGET_API_KEY --source https://api.nuget.org/v3/index.json
```
