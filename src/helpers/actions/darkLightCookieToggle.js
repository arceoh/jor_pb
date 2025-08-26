'use server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'


export async function darkLightCookieToggle() {
  const cookieStore = await cookies()
  const currentTheme = cookieStore.get('color-theme')?.value ?? 'light'
  const newTheme = currentTheme === 'light' ? 'dark' : 'light'
  
  cookieStore.set('color-theme', newTheme, {    
    maxAge: 60 * 60 * 24 * 365 // 1 year
  })
  
  // Redirect to current page to trigger re-render with new theme
  redirect(new URL(require('next/headers').headers().get('referer') || '/').pathname)
}