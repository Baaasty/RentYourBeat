import { AdapterUser } from "./../../../node_modules/@auth/core/adapters.d";
import { Session } from "./../../../node_modules/@auth/core/src/types";
import Google from "@auth/core/providers/google";
import Facebook from "@auth/core/providers/facebook";
import CredentialsProvider from "@auth/core/providers/credentials";
import type { AuthConfig } from "@auth/core/types";
import { NuxtAuthHandler } from "#auth";

const runtimeConfig = useRuntimeConfig();

export const authOptions: AuthConfig = {
  secret: runtimeConfig.authJs.secret,
  providers: [
    CredentialsProvider({}),
    Google({
      clientId: runtimeConfig.google.clientId,
      clientSecret: runtimeConfig.google.clientSecret,
      async profile(profile) {
        return {
          name: `${profile.given_name} ${profile.family_name}`,
          image: profile.picture,
          ...profile,
        };
      },
    }),
    Facebook({
      clientId: runtimeConfig.facebook.clientId,
      clientSecret: runtimeConfig.facebook.clientSecret,
      userinfo: {
        url: "https://graph.facebook.com/me?fields=id,email,first_name,last_name,picture",
      },
      allowDangerousEmailAccountLinking: true,
      async profile(profile) {
        return {
          name: `${profile.first_name} ${profile.last_name}`,
          image: profile.picture.data.url,
          ...profile,
        };
      },
    }),
  ],
};

export default NuxtAuthHandler(authOptions, runtimeConfig);
