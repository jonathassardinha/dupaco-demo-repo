# dupaco-demo-repo

Demo Repo to demonstrate Swagger API errors

## Pre-requisites

- Node v16
- npm or yarn

## How to run

This repo has only the basics needed to run the RTK-Query codegen. To run it just do

```bash
yarn && yarn generate:api
```

or

```bash
npm install && npm run generate:api
```

## How to use the openapi-config file

The [openapi-config file](./openapi-config.ts) separates the endpoints in files. This repo is used to demonstrate the api erros so there are three endpoints mapped:

- Authorize/\*
- Cards/\*
- Register/\*

Both Authorize and Register are working correctly but the Cards enpoints have errors. To add or remove enpoints just change the entries in the `outputFiles` property inside the config file.
