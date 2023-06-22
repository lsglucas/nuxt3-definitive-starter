// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools
  devtools: { enabled: true },

  // typescripts
  typescript: {
    strict: true,
    typeCheck: true,
  },

  // modules
  modules: ["@nuxt/devtools", "@nuxtjs/eslint-module"],
});
