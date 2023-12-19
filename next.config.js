/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "vercel.com",
      },
      {
        domains: ["https://mvg-frontend-marbenz2.vercel.app/"],
      },
    ],
  },
};

module.exports = nextConfig;
