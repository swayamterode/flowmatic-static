import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage.efferd.com",
        pathname: "/screen/**",
      },
    ],
  },
};

export default nextConfig;
