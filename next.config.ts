import type { NextConfig } from "next";

import { DAS_PROFITEAM, TRAUM_BAD } from "@/lib/constants";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    contentDispositionType: "inline",
  },
  allowedDevOrigins: [DAS_PROFITEAM, TRAUM_BAD],
};

export default nextConfig;
