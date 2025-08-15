import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/**", // Allows any path on this domain
      },
      {
        protocol: "https",
        hostname: "cdn-images.podbay.fm",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
