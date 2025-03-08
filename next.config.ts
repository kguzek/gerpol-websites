import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cdn1.site-media.eu",
      },
    ],
  },
};

export default nextConfig;
