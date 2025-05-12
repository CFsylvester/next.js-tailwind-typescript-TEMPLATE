import { createClient } from '@supabase/supabase-js';

export const supabaseCons = createClient(
  process.env.NEXT_PUBLIC_CONSTITUENT_DATA_URL!,
  process.env.NEXT_PUBLIC_CONSTITUENT_DATA_ANON_KEY!
);

// scale as needed for other services example:
// export const supabaseAna = createClient(
//   process.env.NEXT_PUBLIC_ANALYTICS_URL!,
//   process.env.NEXT_PUBLIC_ANALYTICS_ANON_KEY!
// );
