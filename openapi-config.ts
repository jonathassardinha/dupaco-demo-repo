import type { ConfigFile } from '@rtk-query/codegen-openapi'

// This ensures that we're not forced to have an apiFile prop in the root level
type CustomConfigFile = Partial<ConfigFile> & Pick<ConfigFile, 'schemaFile'>

const config: CustomConfigFile = {
  // TODO - #DW-012 (Fix swagger doc so codegen works with all endpoints) - https://loka-ext.atlassian.net/browse/DW-012
  schemaFile: 'https://test.dupaco.com/api/swagger/v2/swagger.json',
  hooks: true,
  outputFiles: {
    './src/services/api/endpoints/auth.ts': {
      apiFile: './src/services/api/baseApi.ts',
      apiImport: 'baseApi',
      filterEndpoints: [/^authorize.*$/],
      exportName: 'authApi',
    },
    './src/services/api/endpoints/cards.ts': {
      apiFile: './src/services/api/auth.ts',
      apiImport: 'authApi',
      filterEndpoints: [/^cards.*$/],
      exportName: 'cardsApi',
    },
    './src/services/api/endpoints/register.ts': {
      apiFile: './src/services/api/endpoints/auth.ts',
      apiImport: 'authApi',
      filterEndpoints: [/^register.*$/],
      exportName: 'registerApi',
    },
  },
}

export default config
