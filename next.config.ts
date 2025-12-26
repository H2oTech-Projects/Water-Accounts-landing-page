import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wateraccounts.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
