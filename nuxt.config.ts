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
});
