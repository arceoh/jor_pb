import React from 'react';
import {
  Work_Sans,
  Spline_Sans_Mono,
} from 'next/font/google';
import clsx from 'clsx';
import { cookies } from 'next/headers'
import { LIGHT_COLORS, DARK_COLORS } from '@/constants';

import RespectMotionPreferences from '@/components/RespectMotionPreferences';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './styles.css';

const mainFont = Work_Sans({
  subsets: ['latin'],
  display: 'fallback',
  weight: 'variable',
  variable: '--font-family',
});
const monoFont = Spline_Sans_Mono({
  subsets: ['latin'],
  display: 'fallback',
  weight: 'variable',
  variable: '--font-family-mono',
});

async function RootLayout({ children }) {
  const cookieStore = await cookies()
  const savedTheme = cookieStore.get('color-theme');
  const theme = savedTheme?.value || 'light';
  const themeColors = theme === 'light' ? LIGHT_COLORS : DARK_COLORS;

  return (
    <RespectMotionPreferences>
      <html
        lang="en"
        className={clsx(mainFont.variable, monoFont.variable)}
        data-color-theme={theme} style={themeColors}
      >
        <body>         
            <Header initialTheme={theme} />
            <main>{children}</main>
            <Footer />         
        </body>
      </html>
    </RespectMotionPreferences>
  );
}

export default RootLayout;
