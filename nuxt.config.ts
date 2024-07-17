// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "UTF-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Metro Electric",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Leading the Electric Vehicle Revolution across the Continent",
        },
      ],
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@vueuse/motion/nuxt"],
  devtools: { enabled: true },
  compatibilityDate: "2024-07-02",
});
