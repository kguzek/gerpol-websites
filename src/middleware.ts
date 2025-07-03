import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { DAS_PROFITEAM, TRAUM_BAD } from "./lib/constants";

export function getPathPrefix(hostname: string) {
  if (hostname === TRAUM_BAD || hostname === DAS_PROFITEAM) {
    return `/${hostname.split("-").slice(0, 2).join("-")}`;
  }
  console.warn(`[MIDDLEWARE] unknown hostname: '${hostname}'`);
  return null;
}

export default function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "MISSING_HOST_HEADER";

  function redirect(path: string, type: "redirect" | "rewrite" = "redirect") {
    const to = new URL(path, `${request.nextUrl.protocol}//${host.replace("www.", "")}`);
    console.info(`[MIDDLEWARE] ${type} ${request.nextUrl.href} -> ${to}`);
    return NextResponse[type](to);
  }

  if (host.startsWith("www.")) {
    return redirect(request.nextUrl.pathname);
  }
  const prefix = getPathPrefix(host);
  if (prefix != null && !request.nextUrl.pathname.startsWith(prefix)) {
    // rewrites with trailing slashes act as redirects, so we remove them
    return redirect(`${prefix}${request.nextUrl.pathname.replace(/\/$/, "")}`, "rewrite");
  }

  if (request.nextUrl.pathname === "/test") {
    return redirect("/das-profiteam", "rewrite");
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     * - [slug].png/pdf (all .png or .pdf files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.+\.(?:png|pdf)$).*)",
  ],
};
