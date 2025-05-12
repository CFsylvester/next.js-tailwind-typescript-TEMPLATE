import { pgTable, serial, text } from 'drizzle-orm/pg-core';

export const industryGroups = pgTable('industry_groups', {
  id: serial('id').primaryKey(),
  name: text('name').notNull().unique(),
});
