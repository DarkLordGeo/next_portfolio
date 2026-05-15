import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL("https://res.cloudinary.com/di4lzdrlk/image/upload/c_crop,g_north_west,h_4047,w_3079,x_754/copy_of_new.jpg")]
  }
};

export default nextConfig;
