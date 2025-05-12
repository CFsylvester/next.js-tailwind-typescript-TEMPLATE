// ✅ Cleaner with use() stable in server components as of React 19
import { use } from 'react';
import { getAllTags } from '@/models/ConstituentsData/lib/queries/tags';

import Table from '@/components/Table';

export default function Page() {
  const data = use(getAllTags());

  return <Table data={data} type="tags" searchKey={['name']} />;
}
