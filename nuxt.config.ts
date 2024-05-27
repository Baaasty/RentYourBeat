// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "nuxt-icon",
    "@pinia/nuxt",
    "@nuxtjs/supabase",
    "@vee-validate/nuxt",
  ],
  routeRules: {
    "/": { prerender: true },
    "/products": { redirect: "/" },
    "/dashboard(/*)?": {
      ssr: false,
    },
  },
  runtimeConfig: {
    public: {
      siteUrl: process.env.SITE_URL,
    },
  },
  supabase: {
    redirectOptions: {
      login: "/login",
      callback: "/confirm",
      include: ["/dashboard(/*)?"],
      cookieRedirect: true,
    },
  },
  veeValidate: {
    autoImports: true,
  },
  googleFonts: {
    families: {
      Inter: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
    display: "swap",
  },
});
