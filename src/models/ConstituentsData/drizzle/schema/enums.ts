import { pgEnum } from 'drizzle-orm/pg-core';

export const constituentType = pgEnum('constituent_type', ['Individual', 'Entity', 'Organization']);
export const contactMethod = pgEnum('preferred_contact_method', ['email', 'phone', 'sms']);
