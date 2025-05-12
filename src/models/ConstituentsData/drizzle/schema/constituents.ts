import { pgTable, text, timestamp, integer, boolean, numeric } from 'drizzle-orm/pg-core';

import { industryGroups } from './industryGroups';
import { organizations } from './organizations';
import { constituentType, contactMethod } from './enums';

export const constituents = pgTable('constituents', {
  email: text('email').primaryKey(),
  fullName: text('full_name').notNull(),
  phone: text('phone'),
  fullAddress: text('full_address'),
  dob: timestamp('dob'),
  organizationId: integer('organization_id').references(() => organizations.id),
  industryGroupId: integer('industry_group_id').references(() => industryGroups.id),
  verified: boolean('verified').default(false),
  constituentType: constituentType('constituent_type'),
  totalDonations: numeric('total_donations'),
  averageDonation: numeric('average_donation'),
  donatesAnonymously: boolean('donates_anonymously').default(false),
  donationHistory: text('donation_history'),
  lastContacted: timestamp('last_contacted'),
  lastActive: timestamp('last_active'),
  touchpointFrequency: text('touchpoint_frequency'),
  languagePreference: text('language_preference'),
  preferredContactMethod: contactMethod('preferred_contact_method'),
  commsOptIn: boolean('comms_opt_in').default(true),
  signupDatetime: timestamp('signup_datetime'),
});
