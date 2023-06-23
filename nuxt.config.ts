// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools
  devtools: { enabled: true },

  // typescript
  typescript: {
    strict: true,
  },

  // modules
  modules: [
    "@nuxt/devtools",
    "@nuxtjs/eslint-module",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@nuxtjs/i18n",
  ],

  experimental: {
    typedPages: true,
  },

  // imports
  imports: {
    // Auto-import pinia stores defined in `~/stores`
    dirs: ["stores"],
  },

  // vue
  vue: {
    defineModel: true,
    propsDestructure: true,
  },

  // pinia
  pinia: {
    autoImports: ["defineStore"],
  },

  // - pinia-plugin-persistedstate
  piniaPersistedstate: {
    cookieOptions: {
      sameSite: "strict",
    },
    storage: "cookies",
  },

  // i18n
  i18n: {
    langDir: "lang",
    defaultLocale: "en",
    strategy: "prefix_and_default",
    types: "composition",
    locales: [
      {
        code: "en",
        iso: "en-US",
        file: "en-US.ts",
      },
      {
        code: "pt",
        iso: "pt-BR",
        file: "pt-BR.ts",
      },
    ],
  },
});
