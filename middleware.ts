import { auth } from "auth";
import { NextResponse } from "next/server";

export const middleware = auth((req) => {
  // Se não tem autenticação e tenta acessar rota protegida
  if (!req.auth) {
    return NextResponse.redirect(new URL("/api/auth/signin", req.url));
  }
});

export const config = {
  matcher: ["/dashboard/:path*", "/(protected)/:path*"],
};
