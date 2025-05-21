import { pgTable, text, timestamp, jsonb, integer, boolean, numeric } from 'drizzle-orm/pg-core';

import { placeTypeEnum, geoMatchLevelEnum } from './enums';

export const companies = pgTable('companies', {
  // Generated ID for internal use
  companyId: text('company_id').primaryKey(),

  // Original dataAxle ID
  vendorId: text('vendor_id').notNull().unique(), // format: dataAxle-123456789

  // Basic identity
  name: text('name').notNull(),
  historicalNames: jsonb('historical_names'), // array of strings
  placeType: placeTypeEnum('place_type'),
  inBusiness: boolean('in_business'),
  verifiedOn: timestamp('verified_on'),
  createdAt: timestamp('created_at').defaultNow(),

  // Physical address
  street: text('street'),
  city: text('city'),
  state: text('state'),
  postalCode: text('postal_code'),
  countryCode: text('country_code'),

  // Mailing address
  mailingAddress: text('mailing_address'),
  mailingAddressCity: text('mailing_address_city'),
  mailingAddressState: text('mailing_address_state'),
  mailingAddressPostalCode: text('mailing_address_postal_code'),

  // Geolocation
  latitude: numeric('latitude'),
  longitude: numeric('longitude'),
  geoMatchLevel: geoMatchLevelEnum('geo_match_level'),
  locationLinkage: jsonb('location_linkage'),

  // Industry codes
  primarySicCodeId: integer('primary_sic_code_id'),
  sicCodeIds: jsonb('sic_code_ids'), // array of strings
  primaryNaicsCodeId: integer('primary_naics_code_id'),
  naicsCodeIds: jsonb('naics_code_ids'), // array of strings

  // Contact & web
  phone: text('phone'),
  faxNumber: text('fax_number'),
  website: text('website'),

  // Counts & metrics
  contactsCount: integer('contacts_count'),
  primaryContact: jsonb('primary_contact'),
  locationEmployeeCount: integer('location_employee_count'),
  estimatedLocationEmployeeCount: integer('estimated_location_employee_count'),
  locationSalesVolume: integer('location_sales_volume'),
  squareFootage: integer('square_footage'),
  whiteCollarPercentage: integer('white_collar_percentage'),
  populationDensity: numeric('population_density'),
  wealthyAreaFlag: boolean('wealthy_area_flag'),

  // Hierarchy
  headquartersId: text('headquarters_id'),
  ancestorHeadquartersIds: jsonb('ancestor_headquarters_ids'),

  // Statistical codes
  cbsaCode: integer('cbsa_code'),
  cbsaLevel: integer('cbsa_level'),
  csaCode: integer('csa_code'),
  censusBlock: integer('census_block'),
  censusTract: integer('census_tract'),
  fipsCode: integer('fips_code'),

  // Misc.
  greenscore: integer('greenscore'),

  // Last updated
  lastUpdatedAt: timestamp('last_updated_at').defaultNow().notNull(),
});
