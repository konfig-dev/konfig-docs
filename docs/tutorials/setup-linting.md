# Setup linting for your OpenAPI Spec

There are three ways to lint your spec:

1. [GitHub Action](setup-linting#github-action) (Recommended)
2. [VSCode Extension](setup-linting#vscode-extension-or-cli) (Recommended)
3. [CLI](setup-linting#vscode-extension-or-cli)

## GitHub Action

To setup linting simply place the following configuration under `.github/workflows/konfig-lint.yaml` or merge to an existing GitHub workflow.

```yaml
name: "konfig-lint-openapi-spec"
on: # rebuild any PRs and main branch changes
  pull_request:
  push:
    branches:
      - main # replace this with the name of your production branch
jobs:
  konfig-lint-openapi-spec: # make sure spec passes konfig lint
    runs-on: ubuntu-latest
    env:
      CLI_VERSION: 0.0.110
    steps:
      - uses: actions/checkout@v2
      - name: Cache node_modules
        id: cache-npm
        uses: actions/cache@v3
        with:
          # npm cache files are stored in `~/.npm` on Linux/macOS
          path: ~/.npm
          key: ${{ runner.os }}-build-${{ env.CLI_VERSION }}
      - name: Install Konfig CLI
        run: npm install -g konfig-cli@$CLI_VERSION
      - name: Initialize Linting Rules
        run: konfig init -s
      - name: Lint OpenAPI Spec
        run: konfig lint path/to/api.yaml # replace api.yaml with relative path to your OpenAPI Spec
```

Now on every PR or commit to your production branch you will run the following job that fails if any warnings or errors occur when linting your spec:

![GitHub Action Lint Error](/img/github-action-lint-error.png)

## VSCode Extension or CLI

Ensure you have the `konfig-cli` installed by running

```bash
npm install -g konfig-cli@0.0.110
```

Initialize your target repository (the one that has your OpenAPI spec) with:

```bash
❯ konfig init -s
Downloading Konfig's lint rules... done
Setting up Spectral... done
```

Commit the generated files

```bash
~/Git/my-repo
❯ git status
On branch master
Your branch is ahead of 'origin/master' by 1 commit.
  (use "git push" to publish your local commits)

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        .konfig/
        .spectral.yaml
        .vscode/

nothing added to commit but untracked files present (use "git add" to track)

~/Git/my-repo
❯ git add -A

~/Git/my-repo
❯ git commit -m "Commit Konfig linting ruleset and VSCode settings"
[master 06c577e] Commit Konfig linting ruleset and VSCode settings
 4 files changed, 28 insertions(+)
 create mode 100644 .konfig/ruleset.js
 create mode 100644 .spectral.yaml
 create mode 100644 .vscode/extensions.json
 create mode 100644 .vscode/settings.json
```

:::info

To update your ruleset to the latest verson simply run:

```bash
konfig init -s
```

:::

### VSCode Extension

When opening VSCode to your repo, you will be prompted to install

![VSCode Popup](/img/vscode-popup.png)

Click `Install` to install the Spectral extension.

Now when viewing any OpenAPI spec, you will see inline errors:

![VSCode Error](/img/vscode-lint-error.png)

### CLI

To lint with CLI run `konfig lint`.

```bash
❯ konfig lint api.yaml

/Users/dylanhuang/Git/konfig-monorepo/customers/acme/acme-sdks/api.yaml
 22:10  warning  operation-operationId  Operation must have "operationId" for generated SDK method names.  paths./pet.post

✖ 1 problem (0 errors, 1 warning, 0 infos, 0 hints)
```
