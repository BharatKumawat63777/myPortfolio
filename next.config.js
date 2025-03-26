/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",  // Enables static site generation
    trailingSlash: true,  // Ensures URLs have a trailing slash
    images: {
      unoptimized: true,  // Fixes issues with next/image when exporting statically
    },
  };
  
  module.exports = nextConfig;
  