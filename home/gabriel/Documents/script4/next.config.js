/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
      domains: ['localhost'],
    },
    // Remove the experimental appDir option as it's no longer needed in Next.js 14
  }
  
  module.exports = nextConfig