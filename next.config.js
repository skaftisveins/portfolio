/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        hostname: 'skaftisveins.webdev.is'
      },
    ],
  },
};

module.exports = nextConfig;
