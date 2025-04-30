'use client';
import React from 'react';

type Props = {
  active: boolean;
};

const Overlay: React.FC<Props> = ({ active }) => (
  <div
    className={`
      fixed inset-0 z-10 pointer-events-none grid-layout 
      transition-opacity duration-300 ease-in-out
      ${active ? 'opacity-100' : 'opacity-0'}
    `}
  >
    {Array.from({ length: 12 }).map((_, i) => (
      <div key={i} className="bg-red-500 opacity-10 min-h-screen" />
    ))}
  </div>
);

export default Overlay;
