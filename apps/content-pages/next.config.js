/** @type {import('next').NextConfig} */

const { CATALOG_URL, CHECKOUT_URL } = process.env;


module.exports = {
  transpilePackages: ["@repo/ui", "@repo/layout"],

  async rewrites() {
    return [
      /**
       * Rewrites for Multi Zones
       */
      {
        source: '/catalog',
        destination: `${CATALOG_URL}`,
      },
      {
        source: '/catalog/:path*',
        destination: `http://localhost:3001/:path*`,
      },
      {
        source: '/checkout',
        destination: `${CHECKOUT_URL}`,
      },
    ]
  },
}