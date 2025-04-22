import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'canfield-archive.s3.us-west-2.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'canfield-archive.s3.amazonaws.com'
      },
    ],
  }
};

export default nextConfig;
