import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { unoptimized: true },
  reactCompiler: true,
  output: "standalone",
};

export default nextConfig; 
