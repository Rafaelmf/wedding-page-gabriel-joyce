/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  assetPrefix:
    process.env.NODE_ENV === "production" ? "/wedding-page-gabriel-joyce/" : "",
  basePath: process.env.NODE_ENV === "production" ? "/wedding-page-gabriel-joyce" : "",
  output: "export",
};

module.exports = nextConfig;
