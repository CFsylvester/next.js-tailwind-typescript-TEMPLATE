import { camelCase } from 'change-case';

export function toCamelCaseKeys<T = unknown>(obj: Record<string, any>): T {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [camelCase(key), value])
  ) as T;
}
