'use client'
import React from 'react';
import VisuallyHidden from '../VisuallyHidden';
import { darkLightCookieToggle } from '@/app/actions/darkLightCookieToggle';
import styles from './DarkLightToggle.module.css'
import { Sun, Moon, Loader } from 'react-feather';


function DarkLightToggle({ initialTheme }) {
  const [isPending, startTransition] = React.useTransition()


  const handleToggle = () => {
    startTransition(async () => {
      await darkLightCookieToggle()
    })
  }


  return <button className={styles.wrapper}
    onClick={handleToggle}
    disabled={isPending}
    aria-label={`Switch to ${initialTheme === 'light' ? 'dark' : 'light'} mode`}
  >
    {isPending ? (
      <Loader size="1.5rem" />
    ) : initialTheme === 'light' ? (
      <Moon className="h-5 w-5" />
    ) : (
      <Sun className="h-5 w-5" />
    )}
    <VisuallyHidden>Toggle Dark / Light mode</VisuallyHidden>
  </button>
}

export default DarkLightToggle;
