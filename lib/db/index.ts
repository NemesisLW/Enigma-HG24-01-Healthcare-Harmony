import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

import * as authSchema from "./schema";

const sql = neon(process.env.NEON_DATABASE_URL!);
const db = drizzle(sql, { schema: { ...authSchema } });

export default db;
