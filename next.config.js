/** @type {import('next').NextConfig} */
const nextConfig = {
    
    trailingSlash: true,  // Ensures URLs have a trailing slash
    images: {
      unoptimized: true,  // Fixes issues with next/image when exporting statically
    },
  };
  
  module.exports = nextConfig;
  