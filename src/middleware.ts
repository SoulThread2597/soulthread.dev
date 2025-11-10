import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'


const getValidSubdomain = (host?: string | null) => {
  //? Credit to @InimicalPart for the subdomain code (https://github.com/InimicalPart)
  let subdomain: string | null = null;
  if (!host && typeof window !== 'undefined') {
    host = window.location.host;
  }
  if (host && host.includes('.')) {
    const candidate = host.split('.')[0];
    if (candidate && (!candidate.includes('localhost') && !candidate.includes(".localhost"))) {
      subdomain = candidate;
    }
  }

  //! Return subdomain or null if localhost, but if there is no subdomain, return "www"
  return subdomain ?? ((host as string).split('.')[0].includes('localhost') ? null : "www");
};

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  const host = request.headers.get('host');
  const subdomain = getValidSubdomain(host);

  if (subdomain) {
    url.pathname = `/${subdomain}${url.pathname}`;
  }

  console.log(url)

  // return NextResponse.next()
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};