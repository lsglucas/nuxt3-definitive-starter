// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools
  devtools: { enabled: true, timeline: { enabled: true } },

  // typescript
  typescript: {
    strict: true,
  },

  // modules
  modules: [
    "@nuxt/devtools",
    "@nuxtjs/eslint-module",
    "@pinia/nuxt",
    "@nuxtjs/i18n",
    "@nuxtjs/google-fonts",
    "@vueuse/nuxt",
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

  // i18n
  i18n: {
    baseUrl: process.env.NUXT_PUBLIC_SITE_URL,
    langDir: "lang",
    defaultLocale: "pt",
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
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
  },

  // google fonts
  googleFonts: {
    preload: true,
    families: {
      Roboto: true,
    },
  },
});
