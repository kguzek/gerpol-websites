import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { DAS_PROFITEAM, TRAUM_BAD } from "./lib/constants";

export function isTraumBad(hostname: string) {
  if (hostname === TRAUM_BAD) {
    return true;
  }
  if (hostname === DAS_PROFITEAM) {
    return false;
  }
  console.warn(`[MIDDLEWARE] unknown hostname: '${hostname}'`);
  return false;
}

export default function middleware(request: NextRequest) {
  function redirect(
    path: string,
    type: "redirect" | "rewrite" = "redirect",
    base: string | URL = request.nextUrl,
  ) {
    const to = new URL(path, base);
    console.info(`[MIDDLEWARE] ${type} ${request.nextUrl.href} -> ${to}`);
    return NextResponse[type](to);
  }

  if (
    request.nextUrl.protocol !== "https:" &&
    [DAS_PROFITEAM, TRAUM_BAD].includes(request.nextUrl.hostname)
  ) {
    return redirect(
      request.nextUrl.pathname,
      "redirect",
      request.nextUrl.href.replace("http:", "https:"),
    );
  }
  if (request.nextUrl.hostname.startsWith("www.")) {
    return redirect(request.nextUrl.href.replace("www.", ""));
  }
  const path = isTraumBad(request.nextUrl.hostname) ? "/traum-bad" : "/das-profiteam";
  return redirect(`${path}${request.nextUrl.pathname}`, "rewrite");
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
