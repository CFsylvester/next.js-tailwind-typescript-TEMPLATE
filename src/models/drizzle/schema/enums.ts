import { pgEnum } from 'drizzle-orm/pg-core';

export const placeTypeEnum = pgEnum('place_type', ['branch', 'headquarters', 'independent']);
export const geoMatchLevelEnum = pgEnum('geo_match_level', ['0', '4', 'P', 'X']);
