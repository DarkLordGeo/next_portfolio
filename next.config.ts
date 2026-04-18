import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL("https://res.cloudinary.com/di4lzdrlk/image/upload/v1776505549/job_pfp_xiogtb.jpg")]
  }
};

export default nextConfig;
