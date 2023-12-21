/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // experimental: { esmExternals: true },
  images: {
    domains: ["nubisng.com"],
  },
};

// eslint-disable-next-line no-undef
module.exports = nextConfig;
