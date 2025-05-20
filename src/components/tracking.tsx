"use client";

import Script from "next/script";
import { useEffect } from "react";

const getWindow = () => window as unknown as Window & { dataLayer: unknown[] };

export function Tracking() {
  useEffect(() => {
    const win = getWindow();
    win.dataLayer = win.dataLayer || [];
    win.dataLayer.push("js", new Date());
    win.dataLayer.push("config", "AW-17097839594");
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
  getWindow().dataLayer.push("event", "conversion", {
    send_to: "AW-17097839594/iW1VCJO_ycoaEOqn8dg_",
    value: 1.0,
    currency: "PLN",
  });
}
