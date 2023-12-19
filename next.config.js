/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["vercel.app"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
  },
};

module.exports = nextConfig;
