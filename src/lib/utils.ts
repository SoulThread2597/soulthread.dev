import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


function createRouteMatcher(routes: string[]) {
  return (pathname: string | null) => {
    if (!pathname) return false;
    return routes.some(route => {
      // Handle exact matches and wildcard patterns
      if (route.endsWith('(.*)')) {
        const baseRoute = route.replace('(.*)', '')
        return pathname.startsWith(baseRoute)
      }
      // Handle file extensions
      if (route.startsWith('*.')) {
        const extension = route.substring(1) // Remove the *
        return pathname.includes(extension)
      }
      return pathname === route
    })
  }
}

// export const isAuthRoute = createRouteMatcher([
//   '/sign-in(.*)',
//   '/sign-up(.*)',
//   '/forgot-password(.*)',
//   '/reset-password(.*)',
// ])

export const isPublicRoute = createRouteMatcher([
  // '/sign-in(.*)',
  // '/sign-up(.*)',
  // '/forgot-password(.*)',
  // '/reset-password(.*)',
  '/api(.*)',
  '/_next/(.*)',
  '/favicon.ico',
  '*.js',
  '*.css',
  '*.map',
  '*.png',
  '*.jpg',
  '*.jpeg',
  '*.svg',
  '*.ico',
  '*.woff',
  '*.woff2',
  '*.ttf',
  '*.eot'
])

export const isStaticAsset = createRouteMatcher([
  '/_next/(.*)',
  '*.js',
  '*.css',
  '*.map',
  '*.png',
  '*.jpg',
  '*.jpeg',
  '*.svg',
  '*.ico',
  '*.woff',
  '*.woff2',
  '*.ttf',
  '*.eot'
])
