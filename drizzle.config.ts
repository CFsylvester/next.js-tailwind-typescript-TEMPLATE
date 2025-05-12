// drizzle.config.ts (root)
import { defineConfig } from 'drizzle-kit';
import 'dotenv/config';

const target = (process.env.DB_ENV ?? 'CONSTITUENT_DATA').toUpperCase();

// remove the underscores from the target
const targetWithoutUnderscores = target.replace(/_/g, '');

export default defineConfig({
  schema: `./src/models/${targetWithoutUnderscores}/drizzle/schema/index.ts`,
  out: `./src/models/${targetWithoutUnderscores}/drizzle/migrations`,
  dialect: 'postgresql',
  dbCredentials: {
    host: process.env[`${target}_DB_HOST`]!,
    port: Number(process.env[`${target}_DB_PORT`]!),
    user: process.env[`${target}_DB_USER`]!,
    password: process.env[`${target}_DB_PASSWORD`]!,
    database: process.env[`${target}_DB_NAME`]!,
    ssl: { rejectUnauthorized: false },
  },
});
