'use client';
import React, { FC } from 'react';

type Props = { active: boolean; className?: string; size?: number };

const IconGrid: FC<Props> = ({ active, className = '', size = 24 }) => {
  // Calculate spacing for a more balanced grid
  const cellSize = size / 4;
  const gap = size / 12;
  const totalCellWidth = cellSize * 3 + gap * 2;
  const startX = (size - totalCellWidth) / 2;
  const startY = (size - totalCellWidth) / 2;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className={className}>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(i => {
        // Calculate position with proper gaps
        const col = i % 3;
        const row = Math.floor(i / 3);
        const x = startX + col * (cellSize + gap);
        const y = startY + row * (cellSize + gap);

        return (
          <rect
            key={i}
            x={x}
            y={y}
            width={cellSize}
            height={cellSize}
            rx={cellSize / 4}
            className={`${active ? 'fill-green-500' : 'fill-lightNavy'} transition-colors duration-300`}
          />
        );
      })}
    </svg>
  );
};

export default IconGrid;
