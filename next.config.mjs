/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.mindinventory.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
