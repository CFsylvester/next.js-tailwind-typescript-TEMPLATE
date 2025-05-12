import { supabase } from '../supabaseClient';
import type { TagRow, TagInsert, ConstituentTagRow } from '@/models/ConstituentsData/drizzle/types';

/**
 * Get all tags.
 */
export async function getAllTags(): Promise<TagRow[]> {
  const { data, error } = await supabase.from('tags').select('*');
  if (error) throw error;
  return data!;
}

/**
 * Get a single tag by ID.
 */
export async function getTagById(id: number): Promise<TagRow | null> {
  const { data, error } = await supabase.from('tags').select('*').eq('id', id).single();

  if (error) {
    if ((error as any).code === 'PGRST116') return null;
    throw error;
  }
  return data;
}

/**
 * Create a new tag.
 */
export async function createTag(input: TagInsert): Promise<TagRow> {
  const { data, error } = await supabase.from('tags').insert(input).single();
  if (error) throw error;
  return data!;
}

/**
 * Update a tag by ID.
 */
export async function updateTag(id: number, updates: Partial<TagRow>): Promise<TagRow> {
  const { data, error } = await supabase.from('tags').update(updates).eq('id', id).single();

  if (error) throw error;
  return data!;
}

/**
 * Delete a tag by ID.
 */
export async function removeTag(id: number): Promise<void> {
  const { error } = await supabase.from('tags').delete().eq('id', id);
  if (error) throw error;
}

/**
 * Get all tags for a constituent by email.
 */
export async function getTagsForConstituent(email: string): Promise<ConstituentTagRow[]> {
  const { data, error } = await supabase
    .from('constituent_tags')
    .select('*')
    .eq('constituent_email', email);

  if (error) throw error;
  return data!;
}

/**
 * Assign a tag to a constituent.
 */
export async function addTagToConstituent(
  email: string,
  tagId: number
): Promise<ConstituentTagRow> {
  const { data, error } = await supabase
    .from('constituent_tags')
    .insert({ constituent_email: email, tag_id: tagId })
    .single();

  if (error) throw error;
  return data!;
}

/**
 * Remove a tag from a constituent.
 */
export async function removeTagFromConstituent(email: string, tagId: number): Promise<void> {
  const { error } = await supabase
    .from('constituent_tags')
    .delete()
    .match({ constituent_email: email, tag_id: tagId });

  if (error) throw error;
}
