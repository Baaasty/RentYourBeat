// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "nuxt-icon",
    "@pinia/nuxt",
    "@vee-validate/nuxt",
    "@sidebase/nuxt-auth",
  ],
  routeRules: {
    "/": { prerender: true },
    "/products": { redirect: "/" },
    "/dashboard(/*)?": {
      ssr: false,
    },
  },
  runtimeConfig: {
    auth: {
      secret: process.env.AUTH_SECRET,
      google: {
        clientId: process.env.AUTH_GOOGLE_CLIENT_ID,
        clientSecret: process.env.AUTH_GOOGLE_CLIENT_SECRET,
      },
    },
  },
  auth: {
    provider: {
      type: "authjs",
    },
    globalAppMiddleware: {
      isEnabled: true,
    },
  },
  veeValidate: {
    autoImports: true,
  },
  googleFonts: {
    families: {
      Inter: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
    download: true,
  },
});
