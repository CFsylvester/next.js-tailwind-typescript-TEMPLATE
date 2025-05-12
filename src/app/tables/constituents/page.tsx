import { use } from 'react';
import { ConstituentRow } from '@/models/ConstituentsData/drizzle/types';
import Table from '@/components/Table';

async function fetchConstituentsFromApi(): Promise<ConstituentRow[]> {
  const res = await fetch(`http://localhost:3000/api/constituentsData/constituents`, {
    cache: 'no-store', // avoids caching during development or for always-fresh data
  });

  if (!res.ok) {
    throw new Error('Failed to fetch constituents from API');
  }

  return res.json();
}

export default function Page() {
  const data = use(fetchConstituentsFromApi());

  return (
    <Table<ConstituentRow>
      data={data}
      type="constituents"
      searchKey={['fullName', 'email', 'phone']}
    />
  );
}
