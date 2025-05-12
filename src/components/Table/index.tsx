'use client';

import React, { useState, useMemo } from 'react';
import Icon from '@/components/Icon';
import { CSVLink } from 'react-csv';

type TableType =
  | 'constituents'
  | 'organizations'
  | 'industryGroups'
  | 'tags'
  | 'events'
  | 'constituentTags'
  | 'constituentEvents';

type Props<Row extends Record<string, unknown>> = {
  data: Row[];
  type: TableType;
  searchKey?: (keyof Row)[];
  onDataUpdate?: (newData: Row[]) => void;
};

function Table<Row extends Record<string, unknown>>({
  data: initialData,
  type,
  searchKey = [],
  onDataUpdate,
}: Props<Row>) {
  const [data, setData] = useState(initialData);
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setModalOpen] = useState(false);
  const [newRecord, setNewRecord] = useState<Record<string, string>>({});

  const rawHeaders = data.length > 0 ? Object.keys(data[0]) : [];

  const hiddenColumns: Partial<Record<TableType, string[]>> = {
    constituents: ['organization_id', 'industry_group_id'],
    organizations: [],
    events: [],
  };

  const headers = rawHeaders.filter(key => !hiddenColumns[type]?.includes(key));

  const formatCell = (key: string, value: unknown) => {
    if (value === null || value === undefined) return '';
    if (typeof value === 'boolean') return value ? '✓' : '';
    if (key.toLowerCase().includes('date')) {
      const date = new Date(value as string);
      return isNaN(date.getTime()) ? value : date.toLocaleDateString();
    }
    return String(value);
  };

  const filteredData = useMemo(() => {
    if (!searchQuery.trim()) return data;

    const query = searchQuery.toLowerCase();

    return data.filter(row =>
      searchKey.some(key => {
        const rawValue = row[key];
        if (rawValue === null || rawValue === undefined) return false;

        const value = String(rawValue).toLowerCase();
        return value.split(/\s+/).some(word => word.includes(query));
      })
    );
  }, [data, searchQuery, searchKey]);

  const handleAddRecord = () => {
    const emailKey = headers.find(key => key.toLowerCase().includes('email'));
    const newEmail = newRecord[emailKey || ''];

    const isDuplicate = data.some(row => {
      const rowEmail = row[emailKey as keyof Row];
      return String(rowEmail).toLowerCase() === String(newEmail).toLowerCase();
    });

    if (isDuplicate) {
      alert(`A record with email "${newEmail}" already exists.`);
      return;
    }

    const updated = [...data, newRecord as Row];
    setData(updated);
    onDataUpdate?.(updated);
    setModalOpen(false);
    setNewRecord({});
  };

  return (
    <section className="remove-left-gap bg-neu-white-base w-full relative px-4 shadow-neu-white-inset">
      {/* Header */}
      <div className="mb-4 flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h1 className="capitalize">{type} Management</h1>
          <p className="text-neu-white-darker">
            View and manage {type}. Customize filters and export results.
          </p>
        </div>

        <div className="flex gap-2 mt-4 md:mt-0">
          <button
            onClick={() => setModalOpen(true)}
            className="bg-brand-sapphire text-white px-4 py-2 rounded-md"
          >
            + Add Record
          </button>

          <CSVLink
            data={data}
            filename={`${type}_export.csv`}
            className="border border-neu-white-border px-4 py-2 rounded-md text-display-body bg-white shadow hover:bg-neutral-100"
          >
            Export CSV
          </CSVLink>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
        <div className="relative flex items-center group w-full md:w-64">
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder={`Search ${type}`}
            className="text-display-body w-full px-4 py-2 rounded-md border border-neu-white-border shadow-neu-white-inset placeholder:text-caption"
          />
          <Icon className="absolute right-3 text-neu-white-darker" type="search" size={18} />
        </div>

        <select className="text-display-body px-4 py-2 border border-neu-white-border shadow-neu-white-inset rounded-md">
          <option value="all">Show all</option>
          <option value="today">Signed up today</option>
          <option value="week">Last 7 days</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-auto">
        <table className="min-w-full text-left border border-neu-white-border rounded-md">
          <thead className="bg-neu-white-light text-display-label uppercase">
            <tr>
              {headers.map(key => (
                <th key={key} className="px-4 py-2 border-b">
                  {key.replace(/_/g, ' ')}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-neutral-50">
                {headers.map(key => (
                  <td key={key} className="px-4 py-2 border-t text-display-body">
                    {formatCell(key, row[key as keyof Row])}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-xl">
            <h2 className="text-lg font-semibold mb-4">Add New {type.slice(0, -1)}</h2>
            <form
              onSubmit={e => {
                e.preventDefault();
                handleAddRecord();
              }}
            >
              <div className="grid gap-4 max-h-[60vh] overflow-auto">
                {headers.map(key => (
                  <div key={key} className="flex flex-col">
                    <label className="text-sm font-medium mb-1 capitalize">
                      {key.replace(/_/g, ' ')}
                    </label>
                    <input
                      type="text"
                      value={newRecord[key] || ''}
                      onChange={e => setNewRecord(prev => ({ ...prev, [key]: e.target.value }))}
                      className="border border-neu-white-border rounded-md px-3 py-2"
                    />
                  </div>
                ))}
              </div>

              <div className="mt-6 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setModalOpen(false);
                    setNewRecord({});
                  }}
                  className="px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-brand-sapphire text-white rounded-md hover:bg-brand-sapphire-dark"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

export default Table;
