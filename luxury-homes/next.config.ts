import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  // Required for Netlify deployment
  // Images from Unsplash and other external sources
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: '*.unsplash.com',
      },
    ],
    // Netlify uses its own image optimization
    unoptimized: true,
  },
  // Ensure trailing slashes work consistently
  trailingSlash: false,
};

export default withNextIntl(nextConfig);
