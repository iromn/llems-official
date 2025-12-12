import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/llems-official',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
