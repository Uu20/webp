/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.fakercloud.com',
    'links.papareact.com',
    'lh3.googleusercontent.com'],
  },
}

module.exports = nextConfig

