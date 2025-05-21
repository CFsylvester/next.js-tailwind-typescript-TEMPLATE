import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';
import { v4 as uuidv4 } from 'uuid';
import { sql } from 'drizzle-orm';
import { db } from '../models/client';
import { companies } from '../models/drizzle/schema/companies';
import type { InferModel } from 'drizzle-orm';

const UPLOADS_DIR = path.resolve(process.cwd(), 'src/awaitingUploads');

// Always-returning date parser: fall back to "now" if the value is missing or invalid
function safeDate(value: any): Date {
  const parsed = new Date(value);
  if (!isNaN(parsed.getTime())) {
    return parsed;
  }
  console.warn(`⚠️ Invalid date "${value}", falling back to current time`);
  return new Date();
}

type Company = InferModel<typeof companies>;
type NewCompany = InferModel<typeof companies, 'insert'>;

export async function importAllCsvs() {
  const files = fs.readdirSync(UPLOADS_DIR).filter(f => f.endsWith('.csv'));

  for (const file of files) {
    const filepath = path.join(UPLOADS_DIR, file);
    const csvRaw = fs.readFileSync(filepath, 'utf8');
    const records = parse(csvRaw, { columns: true, skip_empty_lines: true });

    const rowsToUpsert = await Promise.all(
      records.map(async (row: any) => {
        // 1. Build IDs
        const vendorId = `dataAxle-${row.infogroup_id}`;
        let companyId = '';
        while (!companyId) {
          const tryId = `company-${uuidv4()}`;
          const exists = await db.query.companies.findFirst({
            where: (c, { eq }) => eq(c.companyId, tryId),
          });
          if (!exists) companyId = tryId;
        }

        // 2. Parse dates
        const createdAt = safeDate(row.created_at);
        const verifiedOn = safeDate(row.verified_on);
        const lastUpdatedAt = new Date();

        return {
          companyId,
          vendorId,
          name: row.name,
          historicalNames: row.historical_names ? JSON.parse(row.historical_names) : null,
          placeType: row.place_type || null,
          inBusiness: row.in_business?.toLowerCase() === 'yes',

          createdAt,
          verifiedOn,
          lastUpdatedAt,

          street: row.street,
          city: row.city,
          state: row.state,
          postalCode: row.postal_code,
          countryCode: row.country_code,

          mailingAddress: row.mailing_address,
          mailingAddressCity: row.mailing_address_city,
          mailingAddressState: row.mailing_address_state,
          mailingAddressPostalCode: row.mailing_address_postal_code,

          latitude: row.latitude ? parseFloat(row.latitude).toString() : null,
          longitude: row.longitude ? parseFloat(row.longitude).toString() : null,
          geoMatchLevel: row.geo_match_level,
          locationLinkage: row.location_linkage ? JSON.parse(row.location_linkage) : null,

          primarySicCodeId: parseInt(row.primary_sic_code_id) || null,
          sicCodeIds: row.sic_code_ids ? JSON.parse(row.sic_code_ids) : null,
          primaryNaicsCodeId: parseInt(row.primary_naics_code_id) || null,
          naicsCodeIds: row.naics_code_ids ? JSON.parse(row.naics_code_ids) : null,

          phone: row.phone,
          faxNumber: row.fax_number,
          website: row.website,

          contactsCount: parseInt(row.contacts_count) || null,
          primaryContact: row.primary_contact ? JSON.parse(row.primary_contact) : null,
          locationEmployeeCount: parseInt(row.location_employee_count) || null,
          estimatedLocationEmployeeCount: parseInt(row.estimated_location_employee_count) || null,
          locationSalesVolume: parseInt(row.location_sales_volume) || null,
          squareFootage: parseInt(row.square_footage) || null,
          whiteCollarPercentage: parseInt(row.white_collar_percentage) || null,
          populationDensity: row.population_density
            ? parseFloat(row.population_density).toString()
            : null,
          wealthyAreaFlag: row.wealthy_area_flag?.toLowerCase() === 'true',

          headquartersId: row.headquarters_id,
          ancestorHeadquartersIds: row.ancestor_headquarters_ids
            ? JSON.parse(row.ancestor_headquarters_ids)
            : null,

          cbsaCode: parseInt(row.cbsa_code) || null,
          cbsaLevel: parseInt(row.cbsa_level) || null,
          csaCode: parseInt(row.csa_code) || null,
          censusBlock: parseInt(row.census_block) || null,
          censusTract: parseInt(row.census_tract) || null,
          fipsCode: parseInt(row.fips_code) || null,

          greenscore: parseInt(row.greenscore) || null,
        } satisfies NewCompany;
      })
    );

    if (rowsToUpsert.length === 0) {
      console.log(`⚠️ No valid rows in ${file}`);
      continue;
    }

    await db
      .insert(companies)
      .values(rowsToUpsert)
      .onConflictDoUpdate({
        target: companies.vendorId,
        set: {
          name: sql`EXCLUDED.name`,
          historicalNames: sql`EXCLUDED.historical_names`,
          placeType: sql`EXCLUDED.place_type`,
          inBusiness: sql`EXCLUDED.in_business`,
          verifiedOn: sql`EXCLUDED.verified_on`,
          createdAt: sql`EXCLUDED.created_at`,
          street: sql`EXCLUDED.street`,
          city: sql`EXCLUDED.city`,
          state: sql`EXCLUDED.state`,
          postalCode: sql`EXCLUDED.postal_code`,
          countryCode: sql`EXCLUDED.country_code`,
          mailingAddress: sql`EXCLUDED.mailing_address`,
          mailingAddressCity: sql`EXCLUDED.mailing_address_city`,
          mailingAddressState: sql`EXCLUDED.mailing_address_state`,
          mailingAddressPostalCode: sql`EXCLUDED.mailing_address_postal_code`,
          latitude: sql`EXCLUDED.latitude`,
          longitude: sql`EXCLUDED.longitude`,
          geoMatchLevel: sql`EXCLUDED.geo_match_level`,
          locationLinkage: sql`EXCLUDED.location_linkage`,
          primarySicCodeId: sql`EXCLUDED.primary_sic_code_id`,
          sicCodeIds: sql`EXCLUDED.sic_code_ids`,
          primaryNaicsCodeId: sql`EXCLUDED.primary_naics_code_id`,
          naicsCodeIds: sql`EXCLUDED.naics_code_ids`,
          phone: sql`EXCLUDED.phone`,
          faxNumber: sql`EXCLUDED.fax_number`,
          website: sql`EXCLUDED.website`,
          contactsCount: sql`EXCLUDED.contacts_count`,
          primaryContact: sql`EXCLUDED.primary_contact`,
          locationEmployeeCount: sql`EXCLUDED.location_employee_count`,
          estimatedLocationEmployeeCount: sql`EXCLUDED.estimated_location_employee_count`,
          locationSalesVolume: sql`EXCLUDED.location_sales_volume`,
          squareFootage: sql`EXCLUDED.square_footage`,
          whiteCollarPercentage: sql`EXCLUDED.white_collar_percentage`,
          populationDensity: sql`EXCLUDED.population_density`,
          wealthyAreaFlag: sql`EXCLUDED.wealthy_area_flag`,
          headquartersId: sql`EXCLUDED.headquarters_id`,
          ancestorHeadquartersIds: sql`EXCLUDED.ancestor_headquarters_ids`,
          cbsaCode: sql`EXCLUDED.cbsa_code`,
          cbsaLevel: sql`EXCLUDED.cbsa_level`,
          csaCode: sql`EXCLUDED.csa_code`,
          censusBlock: sql`EXCLUDED.census_block`,
          censusTract: sql`EXCLUDED.census_tract`,
          fipsCode: sql`EXCLUDED.fips_code`,
          greenscore: sql`EXCLUDED.greenscore`,
          lastUpdatedAt: sql`NOW()`,
        },
      });

    console.log(`✅ Upserted ${rowsToUpsert.length} companies from ${file}`);
  }

  console.log('✅ All CSV files have been imported');
  process.exit(0);
}

importAllCsvs();
