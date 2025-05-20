"use client";

import type { ComponentProps } from "react";
import dynamic from "next/dynamic";
import Script from "next/script";
import { useEffect } from "react";

const getWindow = () => window as unknown as Window & { dataLayer: unknown[] };
const gtag = (...args: unknown[]) => getWindow().dataLayer.push(args);

function Tracking() {
  useEffect(() => {
    getWindow().dataLayer ??= [];
    gtag("js", new Date());
    gtag("config", "AW-17097839594");
    gtag("consent", "default", {
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      analytics_storage: "denied",
    });
  }, []);

  return (
    <>
      <Script
        data-collect-dnt="true"
        async
        src="https://scripts.simpleanalyticscdn.com/latest.js"
      ></Script>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-17097839594"
      ></Script>
    </>
  );
}

/** Registers a conversion in the Google ads campain */
export function registerConversion() {
  gtag("event", "conversion", {
    send_to: "AW-17097839594/iW1VCJO_ycoaEOqn8dg_",
    value: 1.0,
    currency: "PLN",
  });
}

const grantConsent = (key: string) => gtag("consent", "update", { [key]: "granted" });

function acceptAnalyticsCookies() {
  grantConsent("analytics_storage");
}

function acceptAdvertisingCookies() {
  grantConsent("ad_storage");
  grantConsent("ad_user_data");
  grantConsent("ad_personalization");
}

const CookieManager = dynamic(
  () => import("react-cookie-manager").then((mod) => mod.CookieManager),
  { ssr: false, loading: () => null },
);

export function AnalyticsProvider({
  children,
  ...props
}: ComponentProps<typeof CookieManager>) {
  return (
    <CookieManager
      onAccept={() => {
        acceptAnalyticsCookies();
        acceptAdvertisingCookies();
      }}
      onManage={(preferences) => {
        if (preferences == null) return;
        if (preferences.Analytics) {
          acceptAnalyticsCookies();
        }
        if (preferences.Advertising) {
          acceptAdvertisingCookies();
        }
      }}
      {...props}
    >
      {children}
      <Tracking />
    </CookieManager>
  );
}
