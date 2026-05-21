import type { NextAuthConfig } from "next-auth";
import NextAuth from "next-auth";

import Google from "next-auth/providers/google";

import { PrismaAdapter } from "@auth/prisma-adapter";
import { getPrisma, hasDatabaseConfig } from "./src/lib/prisma";

const config = {
  ...(hasDatabaseConfig()
    ? { adapter: PrismaAdapter(getPrisma()) }
    : {}),
  secret: process.env.AUTH_SECRET,
  session: { strategy: "jwt" },
  trustHost: true,
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
  callbacks: {
    session({ session, token }) {
      // Adiciona o ID do usuário à sessão
      if (token.sub) session.user.userId = token.sub;
      return session;
    },
  },
  pages: {
    signIn: "/signin",
  },
} satisfies NextAuthConfig;

const nextAuth = NextAuth(config);

export const { handlers, auth, signOut } = nextAuth;

export async function signIn(...args: Parameters<typeof nextAuth.signIn>) {
  if (!hasDatabaseConfig()) {
    throw new Error(
      "Authentication requires database credentials in the active environment. Add DATABASE_URL or the PG* variables in Vercel before signing in.",
    );
  }

  return nextAuth.signIn(...args);
}

// Definir o tipo do provedor
interface ProviderWithId {
  id: string;
  name: string;
}

// Mapeando os provedores manualmente
export const providerMap = config.providers.map((provider) => {
  const typedProvider = provider as unknown as ProviderWithId;
  return { id: typedProvider.id, name: typedProvider.name };
});
