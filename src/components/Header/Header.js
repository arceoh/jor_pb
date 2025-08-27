import React from 'react';
import clsx from 'clsx';
import { Rss, Sun, Moon } from 'react-feather';
import Link from 'next/link';

import Logo from '@/components/Logo';
import VisuallyHidden from '@/components/VisuallyHidden';

import styles from './Header.module.css';
import DarkLightToggle from '../DarkLightToggle';

function Header({ initialTheme, className, ...delegated }) {
  return (
    <header
      className={clsx(styles.wrapper, className)}
      {...delegated}
    >
      <Logo />

      <div className={styles.actions}>
        <Link href="/rss.xml" className={styles.action}>
          <Rss
            size="1.5rem"
            style={{            
              transform: 'translate(2px, -2px)',
            }}
          />
          <VisuallyHidden>
            View RSS feed
          </VisuallyHidden>
        </Link>
        <DarkLightToggle initialTheme={initialTheme} />
        <VisuallyHidden>
          Toggle dark / light mode
        </VisuallyHidden>
      </div>
    </header>
  );
}

export default Header;
