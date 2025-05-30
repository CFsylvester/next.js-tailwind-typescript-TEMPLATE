'use client';
import React from 'react';
import Icon from '@/components/Icon';

type Props = {
  active: boolean;
  onChange: (active: boolean) => void;
  className?: string;
};

const breakpoints = [
  { name: 'xs', classes: 'inline sm:hidden' },
  { name: 'sm', classes: 'hidden sm:inline md:hidden' },
  { name: 'md', classes: 'hidden md:inline lg:hidden' },
  { name: 'lg', classes: 'hidden lg:inline xl:hidden' },
  { name: 'xl', classes: 'hidden xl:inline 2xl:hidden' },
  { name: '2xl', classes: 'hidden 2xl:inline 3xl:hidden' },
  { name: '3xl', classes: 'hidden 3xl:inline 4xl:hidden' },
  { name: '4xl', classes: 'hidden 4xl:inline' },
];

const GridOverlayToggle: React.FC<Props> = ({ active, onChange, className = '' }) => (
  <button
    onClick={() => onChange(!active)}
    className={`
      ${className}
      flex items-center
      w-32 h-12
      rounded-lg
      px-3
      bg-neu-navy-base
      shadow-neu-navy-base
      transition-all duration-200
    `}
  >
    <div className="flex items-end mr-2">
      <span className="text-white text-display-label font-bold leading-tight">Grid</span>
      <span className="text-display-caption text-neu-white-darker ml-1">
        {breakpoints.map(({ name, classes }) => (
          <span key={name} className={classes}>
            ({name})
          </span>
        ))}
      </span>
    </div>

    <div
      className={`
        flex items-center justify-center
        w-[36px] h-[36px]
        rounded-full
        bg-neu-navy-dark
        shadow-neu-navy-inset
      `}
    >
      <Icon type="grid" active={active} size={18} />
    </div>
  </button>
);

export default GridOverlayToggle;
