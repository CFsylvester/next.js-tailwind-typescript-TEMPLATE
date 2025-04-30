'use client';
import React from 'react';
import Icon from '@/components/Icon';

type Props = {
  active: boolean;
  onChange: (active: boolean) => void;
  className?: string;
};

const Toggle: React.FC<Props> = ({ active, onChange, className = '' }) => (
  <button
    onClick={() => onChange(!active)}
    className={`
      ${className}
      flex items-center
      w-[118px] h-12
      bg-navy
      rounded-lg
      px-3
      shadow-neumorphic
      transition-all duration-200
    `}
  >
    <div className="flex items-end mr-2">
      <span className="text-white text-sm font-bold leading-tight">Grid</span>
      <span className="text-[10px] text-gray-400 ml-1 mb-0">
        <span className="xs:inline sm:hidden">(xs)</span>
        <span className="hidden sm:inline md:hidden">(sm)</span>
        <span className="hidden md:inline lg:hidden">(md)</span>
        <span className="hidden lg:inline xl:hidden">(lg)</span>
        <span className="hidden xl:inline 2xl:hidden">(xl)</span>
        <span className="hidden 2xl:inline">(2xl)</span>
      </span>
    </div>

    <div
      className={`
        flex items-center justify-center
        w-8 h-8
        rounded-full
        ml-auto
        bg-deepNavy
        shadow-neumorphic-inset
      `}
    >
      <Icon type="grid" active={active} size={18} />
    </div>
  </button>
);

export default Toggle;
