'use client'
import React from 'react';
import VisuallyHidden from '../VisuallyHidden';
import { darkLightCookieToggle } from '@/helpers/actions/darkLightCookieToggle';
import styles from './DarkLightToggle.module.css'
import { Sun, Moon, Loader } from 'react-feather';

function DarkLightToggle({ initialTheme }) {
  const [isPending, startTransition] = React.useTransition();
  
  // Use useOptimistic to immediately update the UI
  const [optimisticTheme, addOptimistic] = React.useOptimistic(
    initialTheme,
    (currentTheme, newTheme) => {
      return newTheme;
    }
  );

  const handleToggle = () => {
    startTransition(async () => {
      // Immediately update the UI with the opposite theme
      const newTheme = optimisticTheme === 'light' ? 'dark' : 'light';
      addOptimistic(newTheme);
      
      // Then perform the server action
      await darkLightCookieToggle();
    });
  };

  return (
    <button 
      className={styles.wrapper}
      onClick={handleToggle}
      disabled={isPending}
      aria-label={`Switch to ${optimisticTheme === 'light' ? 'dark' : 'light'} mode`}
    >
      {isPending ? (
        <Loader size="1.5rem" />
      ) : optimisticTheme === 'light' ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
      <VisuallyHidden>Toggle Dark / Light mode</VisuallyHidden>
    </button>
  );
}

export default DarkLightToggle;