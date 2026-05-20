import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { NextResponse } from "next/server";

const { auth } = NextAuth(authConfig);

export const middleware = auth((req) => {
  if (!req.auth && req.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/api/auth/signin", req.url));
  }
});

export const config = {
  matcher: ["/dashboard/:path*"],
};
