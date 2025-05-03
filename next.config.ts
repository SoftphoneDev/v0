/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    unoptimized: true,
  },
  experimental: {
    // Enable the latest React 19 features
    serverActions: {
      bodySizeLimit: '2mb',
    },
    // Enable the latest optimizations
    optimizePackageImports: ['lucide-react'],
  },
};

export default nextConfig;
