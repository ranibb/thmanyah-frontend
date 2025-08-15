import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn-images.podbay.fm",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "is1-ssl.mzstatic.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  // Add the webpack configuration here
  webpack(config) {
    // Find the existing rule that handles images
    const fileLoaderRule = config.module.rules.find((rule: { test: { toString: () => string | string[]; }; }) =>
      rule.test?.toString().includes("svg")
    );

    // Modify the existing rule to exclude SVG files
    // We want our new rule to handle them instead
    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Add a new rule for SVG files to be handled by @svgr/webpack
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: ["@svgr/webpack"],
      }
    );

    // Modify the file loader rule to ignore SVGs that are not loaded as URLs
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};

export default nextConfig;
