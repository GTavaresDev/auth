import type { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
      issuer: "https://accounts.google.com",
      authorization: {
        params: {
          scope: "openid email profile",
        },
      },
    }),
  ],
} satisfies NextAuthConfig;

export default authConfig;
