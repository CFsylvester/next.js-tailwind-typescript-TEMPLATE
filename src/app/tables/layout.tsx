'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Tag, User } from 'lucide-react';

const navItems = [
  { label: 'Constituents', href: '/tables/constituents', icon: <User size={20} /> },
  { label: 'Tags', href: '/tables/tags', icon: <Tag size={20} /> },
];

export default function TablesLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      {/* Sidebar */}
      <aside className=" min-h-screen remove-left-padding col-span-1 w-full bg-brand-sapphire text-white flex flex-col items-center py-6 space-y-4">
        {navItems.map(item => {
          const isActive = pathname === item.href;
          const baseClass =
            'relative group flex items-center justify-center w-10 h-10 rounded-md hover:bg-brand-sapphire-dark transition';
          const activeClass = isActive ? 'bg-white text-brand-sapphire' : '';
          return (
            <Link key={item.href} href={item.href} className={`${baseClass} ${activeClass}`}>
              {item.icon}
              <span className="absolute left-14 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap z-10">
                {item.label}
              </span>
            </Link>
          );
        })}
      </aside>

      {/* Main Content */}
      <main className="col-span-11 remove-right-padding">{children}</main>
    </>
  );
}
