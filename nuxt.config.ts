// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: "/nuxt-github-pages/",
    buildAssetsDir: "assets",
  },
  modules: ["@nuxtjs/tailwindcss", "@vueuse/motion/nuxt"],
  devtools: { enabled: true },
  compatibilityDate: "2024-07-02",
});
