import type { Config } from "drizzle-kit";

export default {
  schema: ["./lib/db/schema.ts", "./lib/db/schemas/*"],
  driver: "pg",
  out: "./drizzle",
  dbCredentials: {
    connectionString: process.env.NEON_DATABASE_URL!,
  },
} satisfies Config;
