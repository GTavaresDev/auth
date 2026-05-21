import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";
import { Pool } from "pg";

declare global {
  var prisma: PrismaClient | undefined;
}

function buildConnectionStringFromPgEnv() {
  const host = process.env.PGHOST;
  const database = process.env.PGDATABASE;
  const user = process.env.PGUSER;
  const password = process.env.PGPASSWORD;

  if (!host || !database || !user || !password) {
    return null;
  }

  const url = new URL(
    `postgresql://${encodeURIComponent(user)}:${encodeURIComponent(password)}@${host}/${database}`,
  );

  url.port = process.env.PGPORT ?? "5432";

  if (process.env.PGSSLMODE) {
    url.searchParams.set("sslmode", process.env.PGSSLMODE);
  }

  if (process.env.PGCHANNELBINDING) {
    url.searchParams.set("channel_binding", process.env.PGCHANNELBINDING);
  }

  return url.toString();
}

export function getConnectionString() {
  return process.env.DATABASE_URL ?? buildConnectionStringFromPgEnv();
}

export function hasDatabaseConfig() {
  return Boolean(getConnectionString());
}

function createAdapter() {
  const connectionString = getConnectionString();

  if (!connectionString) {
    throw new Error(
      "Database credentials are not configured. Set DATABASE_URL or the PGHOST/PGDATABASE/PGUSER/PGPASSWORD variables in the active environment before using Prisma or authentication.",
    );
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
