// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Server configuration
  devtools: { enabled: true },
  compatibilityDate: "2024-07-03",

  // Nuxt Modules
  modules: [
    "@nuxtjs/tailwindcss",
    "@vee-validate/nuxt",
    "@nuxt/icon",
    "@nuxt/fonts",
    "@hebilicious/authjs-nuxt",
  ],

  // Router configuration
  routeRules: {
    "/": { prerender: true },
    "/products": { redirect: "/" },
    "/dashboard(/*)?": {
      ssr: false,
    },
  },

  // Runtime configuration
  runtimeConfig: {
    authJs: {
      secret: process.env.AUTH_SECRET,
    },
    google: {
      clientId: process.env.AUTH_GOOGLE_CLIENT_ID,
      clientSecret: process.env.AUTH_GOOGLE_CLIENT_SECRET,
    },
    facebook: {
      clientId: process.env.AUTH_FACEBOOK_CLIENT_ID,
      clientSecret: process.env.AUTH_FACEBOOK_CLIENT_SECRET,
    },
    mail: {
      verify: {
        host: process.env.MAIL_VERIFY_HOST,
        port: process.env.MAIL_VERIFY_PORT,
        secure: process.env.MAIL_VERIFY_SECURE === "true",
        auth: {
          user: process.env.MAIL_VERIFY_USER,
          pass: process.env.MAIL_VERIFY_PASS,
        },
      },
    },
    public: {
      authJs: {
        baseUrl: process.env.BASE_URL,
      },
    },
  },

  // AuthJS module configuration
  authJs: {
    guestRedirectTo: "/auth/login",
    authenticatedRedirectTo: "/dashboard",
  },

  alias: {
    cookie: "cookie",
  },

  // VeeValidate module configuration
  veeValidate: {
    autoImports: true,
  },

  // Fonts module configuration
  fonts: {
    provider: "google",
    google: {
      families: {
        Inter: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      },
    },
  },

  // TailwindCSS module configuration
  tailwindcss: {
    exposeConfig: false,
  },
});
