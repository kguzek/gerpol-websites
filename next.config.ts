import type { NextConfig } from "next";

import { DAS_PROFITEAM, TRAUM_BAD } from "@/lib/constants";

const nextConfig: NextConfig = {
  allowedDevOrigins: [DAS_PROFITEAM, TRAUM_BAD],
};

export default nextConfig;
