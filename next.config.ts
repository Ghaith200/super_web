import type { NextConfig } from "next";

const nextConfig: NextConfig = {
//  output: 'export', // This tells Next.js to build a static "out" folder
  images: {
    unoptimized: true, // Disable image optimization for static export
  },
};

export default nextConfig;
