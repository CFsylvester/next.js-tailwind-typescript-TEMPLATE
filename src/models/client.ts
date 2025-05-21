import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './drizzle/schema'; // adjust path to your actual schema folder

const queryClient = postgres(process.env.DB_URL!, { max: 1 }); // you can tweak pool config if needed

export const db = drizzle(queryClient, { schema });
