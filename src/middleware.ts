import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const isTraumBad = (hostname: string) => hostname === "traum-bad-berlin.de";

export default function middleware(request: NextRequest) {
  if (request.nextUrl.hostname.startsWith("www.")) {
    return NextResponse.redirect(
      new URL(request.nextUrl.href.replace("www.", ""), request.nextUrl),
    );
  }
  const path = isTraumBad(request.nextUrl.hostname) ? "/traum-bad" : "/das-profiteam";
  return NextResponse.rewrite(
    new URL(`${path}${request.nextUrl.pathname}`, request.nextUrl),
  );
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
