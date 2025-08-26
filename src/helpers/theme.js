import { cookies } from 'next/headers'


// This is the getTheme function that's imported in other files
export async function getTheme() {
    const cookieStore = await cookies()
    return (cookieStore.get('color-theme')?.value ?? 'light')
}

// Optional: Helper function to set theme programmatically
export async function setTheme(theme) {
    const cookieStore = await cookies()
    cookieStore.set('color-theme', theme, {
        maxAge: 60 * 60 * 24 * 365 // 1 year
    })
}