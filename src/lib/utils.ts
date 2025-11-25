import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge";
import { promises as fs } from 'fs';
import path from 'path';

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
]);

export async function setConfig() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    const fs = await import("fs");
    const path = await import("path");

    const configPath = path.join(process.cwd(), "config.jsonc");
      if (!fs.existsSync(configPath)) {
        console.log("config not found, creating one at", configPath);
        fs.writeFileSync(configPath, `{}`);
    }

    const fileContent = fs.readFileSync(configPath, 'utf-8');
    // Remove comments from JSONC (both single-line // and multi-line /* */)
    const jsonContent = fileContent
      .replace(/\/\*[\s\S]*?\*\//g, '') // Remove multi-line comments
      .replace(/\/\/.*/g, ''); // Remove single-line comments
    global.config = JSON.parse(jsonContent);
  }
}
