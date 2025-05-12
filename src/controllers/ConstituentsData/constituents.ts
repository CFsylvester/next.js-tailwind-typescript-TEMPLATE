import {
  getConstituentByEmail,
  createConstituent as insert,
  updateConstituent as update,
  getAllConstituents as getAllRaw,
} from '@/models/ConstituentsData/lib/queries/constituents';
import type { ConstituentInsert, ConstituentRow } from '@/models/ConstituentsData/drizzle/types';

import { toCamelCaseKeys } from '@/lib/utils/index';

/**
 * Converts Supabase data to camelCase keys matching `ConstituentRow`
 */
export async function getAllConstituents(): Promise<ConstituentRow[]> {
  const raw = await getAllRaw();
  return raw.map(row => toCamelCaseKeys<ConstituentRow>(row));
}

/**
 * Create a new constituent.
 * Throws if a constituent with the same email already exists.
 */
export async function createConstituent(input: ConstituentInsert): Promise<ConstituentRow> {
  const existing = await getConstituentByEmail(input.email);
  if (existing) throw new Error(`Constituent with email ${input.email} already exists.`);
  return insert(input);
}

/**
 * Update an existing constituent.
 * Throws if no existing constituent is found.
 */
export async function updateConstituent(
  email: string,
  updates: Partial<ConstituentRow>
): Promise<ConstituentRow> {
  const existing = await getConstituentByEmail(email);
  if (!existing) throw new Error(`No constituent found with email ${email}`);
  return update(email, updates);
}
