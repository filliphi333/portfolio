/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: [
    "*.replit.dev",
    "*.kirk.replit.dev",
    process.env.REPLIT_DEV_DOMAIN,
  ].filter(Boolean),
};

export default nextConfig;
