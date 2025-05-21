import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: `./src/models/drizzle/schema/index.ts`,
  out: `./src/models/drizzle/migrations`,
  dialect: 'postgresql',
  dbCredentials: {
    host: process.env.DB_HOST!,
    port: Number(process.env.DB_PORT!),
    user: process.env.DB_USER!,
    password: process.env.DB_PASSWORD!,
    database: process.env.DB_NAME!,
    ssl: { rejectUnauthorized: false },
  },
});
