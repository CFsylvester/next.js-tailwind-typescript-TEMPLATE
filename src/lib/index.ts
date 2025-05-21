import { camelCase } from 'change-case';
import { snakeCase } from 'change-case';

/** --------------------------------------------------------------------------
 * Convert object keys to snake case.
 * @param obj - The object to convert.
 * @returns The object with keys in snake case.
 */
export const toSnakeCaseKeys = <T = unknown>(obj: Record<string, any>): T =>
  Object.fromEntries(Object.entries(obj).map(([key, value]) => [snakeCase(key), value])) as T;

/** --------------------------------------------------------------------------
 * Convert object keys to camel case.
 * @param obj - The object to convert.
 * @returns The object with keys in camel case.
 */
export const toCamelCaseKeys = <T = unknown>(obj: Record<string, any>): T =>
  Object.fromEntries(Object.entries(obj).map(([key, value]) => [camelCase(key), value])) as T;

/** --------------------------------------------------------------------------
 * Fetch data from the API.
 * @param path - The path to the API endpoint.
 * @param options - The options for the fetch request.
 * @returns The data from the API.
 */

export const fetchFromApi = async <T>(
  path: string,
  options: {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    body?: unknown;
  } = {}
): Promise<T> => {
  const res = await fetch(`http://localhost:3000/api/${path}`, {
    method: options.method || 'GET',
    headers: options.body ? { 'Content-Type': 'application/json' } : undefined,
    body: options.body ? JSON.stringify(options.body) : undefined,
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error(`Failed to ${options.method || 'fetch'} ${path}`);
  }

  return res.json();
};
