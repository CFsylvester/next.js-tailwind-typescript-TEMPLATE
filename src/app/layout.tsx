'use client';
import '@/styles/globals.scss';
import { ReactNode, useState } from 'react';
import { Montserrat } from 'next/font/google';

// components
import GridOverlayToggle from '@/components/GridOverlayToggle';

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
          <GridOverlayToggle
            active={showGrid}
            onChange={setShowGrid}
            className="fixed bottom-8 right-4 z-20"
          />
        )}

        {/* MAIN CONTENT */}
        <main className={`layout ${showGrid ? 'grid-overlay' : ''}`}>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
