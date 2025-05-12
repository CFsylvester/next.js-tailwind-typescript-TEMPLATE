import { pgTable, text, integer, primaryKey } from 'drizzle-orm/pg-core';
import { constituents } from './constituents';
import { tags } from './tags';
import { events } from './events';

export const constituentTags = pgTable(
  'constituent_tags',
  {
    constituentEmail: text('constituent_email')
      .references(() => constituents.email)
      .notNull(),
    tagId: integer('tag_id')
      .references(() => tags.id)
      .notNull(),
  },
  table => ({
    pk: primaryKey({ columns: [table.constituentEmail, table.tagId] }),
  })
);

export const constituentEvents = pgTable(
  'constituent_events',
  {
    constituentEmail: text('constituent_email')
      .references(() => constituents.email)
      .notNull(),
    eventId: integer('event_id')
      .references(() => events.id)
      .notNull(),
  },
  table => ({
    pk: primaryKey({ columns: [table.constituentEmail, table.eventId] }),
  })
);
