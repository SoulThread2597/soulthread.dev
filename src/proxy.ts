import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { setConfig } from '@/lib/utils';

declare const global: SoulThreadDevGlobal;

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

export async function proxy(request: NextRequest) {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    await setConfig();

    const url = request.nextUrl.clone();
    const host = request.headers.get('host');
    const subdomain = getValidSubdomain(host);

    if (global.config.maintenance?.isEnabled && ( global.config.maintenance?.mode === "full" || 
    (global.config.maintenance?.mode === "partial-block" && subdomain && global.config.maintenance?.subdomainsBlocked?.includes(subdomain)) ||
    (global.config.maintenance?.mode === "partial-allow" && subdomain && !global.config.maintenance?.subdomainsAllowed?.includes(subdomain))
    )) {
      url.pathname = `/www/maintenance`;
      return NextResponse.rewrite(url);
    }

    if (!global.config.maintenance?.isEnabled && url.pathname === '/maintenance') {
      url.pathname = `/`;
      return NextResponse.redirect(url);
    }
    
    if (subdomain) {
      url.pathname = `/${subdomain}${url.pathname}`;
    }

    return NextResponse.rewrite(url);
  }
}

export const config = {
  matcher: [
    // Skip Next.js internals
    '/((?!_next).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};