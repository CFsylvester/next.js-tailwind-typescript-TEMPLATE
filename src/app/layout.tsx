'use client';
import '@/styles/globals.scss';
import { ReactNode, useState } from 'react';
import { Montserrat } from 'next/font/google';

// components
import { GridOverlay, GridToggle } from '@/components/Grid';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-montserrat',
});

const RootLayout = ({ children }: { children: ReactNode }) => {
  const [showGrid, setShowGrid] = useState(false);
  const devMode = process.env.NODE_ENV === 'development';

  return (
    <html lang="en" className={montserrat.variable}>
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
        <main className="z-0 grid-layout">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
