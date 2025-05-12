import {
  industryGroups,
  organizations,
  tags,
  events,
  constituents,
  constituentTags,
  constituentEvents,
} from '@/models/ConstituentsData/drizzle/schema/index';

// ————————————————————————————————————————————————————————————————————————————————
// Lookup tables
// ————————————————————————————————————————————————————————————————————————————————

export type IndustryGroupRow = typeof industryGroups.$inferSelect;
export type IndustryGroupInsert = typeof industryGroups.$inferInsert;

export type OrganizationRow = typeof organizations.$inferSelect;
export type OrganizationInsert = typeof organizations.$inferInsert;

export type TagRow = typeof tags.$inferSelect;
export type TagInsert = typeof tags.$inferInsert;

export type EventRow = typeof events.$inferSelect;
export type EventInsert = typeof events.$inferInsert;

// ————————————————————————————————————————————————————————————————————————————————
// Main & join tables
// ————————————————————————————————————————————————————————————————————————————————

export type ConstituentRow = typeof constituents.$inferSelect;
export type ConstituentInsert = typeof constituents.$inferInsert;

export type ConstituentTagRow = typeof constituentTags.$inferSelect;
export type ConstituentTagInsert = typeof constituentTags.$inferInsert;

export type ConstituentEventRow = typeof constituentEvents.$inferSelect;
export type ConstituentEventInsert = typeof constituentEvents.$inferInsert;
