'use client';

import React, { FC } from 'react';

type Props = {
  className?: string;
  active?: boolean;
  size?: number;
};

const IconSearch: FC<Props> = ({ className = '', active = false, size = 24 }) => (
  <svg
    fill="none"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} ${active ? 'text-brand-sapphire' : 'text-neu-white-darker'}`}
  >
    <path
      d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default IconSearch;
