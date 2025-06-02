import { ReactNode } from 'react';
import '@/styles/globals.scss';
import { Montserrat } from 'next/font/google';

// components
import GridOverlayToggle from '@/components/GridOverlayToggle';

// optimized fonts
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-montserrat',
});

const RootLayout = ({ children }: { children: ReactNode }) => {
  // check env vars
  const devMode = process.env.NODE_ENV === 'development';
  const isGridOverlayOverride = process.env.GRID_OVERLAY_OVERRIDE === 'true';

  // show grid overlay if dev mode is true or if the grid overlay override is true
  const showGridOverlay = devMode || isGridOverlayOverride;

  return (
    <html lang="en" className={montserrat.variable}>
      <body>
        {/* DEV GRID TOGGLE */}
        {showGridOverlay && <GridOverlayToggle />}

        {/* MAIN CONTENT */}
        {/* GRID OVERLAY relies on the layout class */}
        <main data-grid-overlay className={'layout'}>
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
