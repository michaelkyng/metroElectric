// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "UTF-8",
      viewport: "width=device-width, initial-scale=1",
      title:
        "Leading the Electric Vehicles (EV) Revolution across the Continent",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Metropolitan Electric Limited is at the forefront of revolutionizing the Electric Vehicle (EV) industry across Africa.",
        },
      ],
    },
  },
  site: {
    url: "https://metropolitanelectricng.com",
    name: "Metropolitan Electric",
    defaultLocale: "en", // not needed if you have @nuxtjs/i18n installed
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@vueuse/motion/nuxt",
    "@zadigetvoltaire/nuxt-gtm",
    "@nuxtjs/seo",
  ],
  devtools: { enabled: true },
  compatibilityDate: "2024-07-02",
  runtimeConfig: {
    public: {
      Emailjs: "75u1MbtaSAXCYENAL",
      gtm: {
        id: process.env.NUXT_PUBLIC_GTM_ID,
        queryParams: {
          gtm_auth: "AB7cDEf3GHIjkl-MnOP8qr",
          gtm_preview: "env-4",
          gtm_cookies_win: "x",
        },
        defer: false,
        compatibility: false,
        nonce: "2726c7f26c",
        enabled: true,
        debug: true,
        loadScript: true,
        enableRouterSync: true,
        ignoredViews: ["homepage"],
        trackOnNextTick: false,
        devtools: true,
      },
    },
  },
});
