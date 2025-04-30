'use client';
import '@/styles/globals.scss';
import { ReactNode, useState } from 'react';

// components
import { GridOverlay, GridToggle } from '@/components/Grid';

const RootLayout = ({ children }: { children: ReactNode }) => {
  const [showGrid, setShowGrid] = useState(false);
  const devMode = process.env.NODE_ENV === 'development';

  return (
    <html lang="en">
      <body>
        {/* DEV GRID TOGGLE */}
        {devMode && (
          <GridToggle
            active={showGrid}
            onChange={setShowGrid}
            className="fixed bottom-8 right-4 z-20"
          />
        )}

        {/* DEV GRID OVERLAY */}
        <GridOverlay active={showGrid} />

        {/* MAIN CONTENT */}
        <div className="z-0 grid-layout">{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;
