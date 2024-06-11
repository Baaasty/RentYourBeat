import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { NuxtAuthHandler } from "#auth";

const config = useRuntimeConfig();

export default NuxtAuthHandler({
  secret: config.auth.secret,
  pages: {
    signIn: "/auth/login",
    signOut: "/auth/login",
    error: "/auth/login",
    verifyRequest: "/auth/verify",
  },
  providers: [
    // @ts-expect-error Bug in nuxt-auth. Maybe fixed in future versions.
    CredentialsProvider.default({
      async authorize(credentials: any) {
        const user = {
          email: "admin@admin.de",
          password: "admin",
        };

        if (
          credentials.email === user.email &&
          credentials.password === user.password
        )
          return user;
      },
    }),
    // @ts-expect-error Bug in nuxt-auth. Maybe fixed in future versions.
    GoogleProvider.default({
      clientId: config.auth.google.clientId,
      clientSecret: config.auth.google.clientSecret,
    }),
  ],
});
