/** @type {import('next').NextConfig} */
const nextConfig = {
  output:'export',
  images: {
    domains: ['randomuser.me']
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
