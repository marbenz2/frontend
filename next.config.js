/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["https://mvg-frontend-marbenz2.vercel.app/"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
  },
};

module.exports = nextConfig;
