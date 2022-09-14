/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['github.com', 'static-cdn.jtvnw.net']
  }
}

module.exports = nextConfig
