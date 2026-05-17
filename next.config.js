/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Only *.page.{tsx,ts,jsx,js} files are treated as pages/routes.
  // NOTE: pageExtensions also affects _app, _document, _error — they must
  // be named _app.page.tsx, _document.page.tsx, etc. to be recognised.
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
  images: {
    remotePatterns: [],
  },
}

module.exports = nextConfig
