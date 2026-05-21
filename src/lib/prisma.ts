import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";
import { Pool } from "pg";

declare global {
  var prisma: PrismaClient | undefined;
}

function createAdapter() {
  const connectionString = process.env.DATABASE_URL;

  if (!connectionString) {
    throw new Error("DATABASE_URL is not configured.");
  }

  const hostname = new URL(connectionString).hostname;

  if (hostname.includes("neon.tech")) {
    return new PrismaNeon({ connectionString });
  }

  return new PrismaPg(new Pool({ connectionString }));
}

let prismaClient = globalThis.prisma;

export function getPrisma() {
  if (prismaClient) {
    return prismaClient;
  }

  prismaClient = new PrismaClient({
    adapter: createAdapter(),
    errorFormat: "pretty",
  });

  if (process.env.NODE_ENV !== "production") {
    globalThis.prisma = prismaClient;
  }

  return prismaClient;
}

export default getPrisma;
