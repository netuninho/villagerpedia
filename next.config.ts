import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'dodo.ac' },
      { protocol: 'https', hostname: 'nookipedia.com' }
    ]
  }
};

export default nextConfig;
