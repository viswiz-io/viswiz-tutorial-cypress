# VisWiz.io Tutorial with Cypress

![Github Actions status](https://github.com/viswiz-io/viswiz-tutorial-cypress/actions/workflows/ci.yaml/badge.svg)

Code for the [VisWiz.io](https://www.viswiz.io) tutorial on how to [setup visual regression testing
with Cypress and VisWiz.io](https://www.viswiz.io/help/tutorials/cypress).

Follow the tutorial above together with our [commit git history](https://github.com/viswiz-io/viswiz-tutorial-cypress/commits/without-plugin)

## Install

```
$ yarn
```

## Usage

This will run automated visual tests:

```
$ yarn test
$ VISWIZ_API_KEY=FILL_IN VISWIZ_PROJECT_ID=FILL_IN COMMIT_MESSAGE=$(git log -1 --pretty=%s) yarn test:viswiz
```