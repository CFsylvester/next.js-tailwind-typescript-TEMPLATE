// src/ConstituentsData/lib/queries/constituents.ts

import { supabase } from '../supabaseClient';

// 👇 Import your Drizzle‐inferred types from drizzle/types
import type { ConstituentRow, ConstituentInsert } from '@/models/ConstituentsData/drizzle/types';

// ————————————————————————————————————————————————————————————————————————————————
// CRUD Functions for "constituents"
// ————————————————————————————————————————————————————————————————————————————————

/** Fetch all constituents. */
export async function getAllConstituents(): Promise<ConstituentRow[]> {
  const { data, error } = await supabase.from('constituents').select('*');

  if (error) throw error;
  return data!;
}

/** Fetch one by email. */
export async function getConstituentByEmail(email: string): Promise<ConstituentRow | null> {
  const { data, error } = await supabase
    .from('constituents')
    .select('*')
    .eq('email', email)
    .single();

  if (error) {
    if ((error as any).code === 'PGRST116') return null;
    throw error;
  }
  return data;
}

/** Insert a new constituent. */
export async function createConstituent(input: ConstituentInsert): Promise<ConstituentRow> {
  const { data, error } = await supabase.from('constituents').insert(input).single();

  if (error) throw error;
  return data!;
}

/** Update fields on an existing constituent. */
export async function updateConstituent(
  email: string,
  updates: Partial<ConstituentRow>
): Promise<ConstituentRow> {
  const { data, error } = await supabase
    .from('constituents')
    .update(updates)
    .eq('email', email)
    .single();

  if (error) throw error;
  return data!;
}

/** Delete a constituent by email. */
export async function removeConstituent(email: string): Promise<void> {
  const { error } = await supabase.from('constituents').delete().eq('email', email);

  if (error) throw error;
}
