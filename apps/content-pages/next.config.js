/** @type {import('next').NextConfig} */

const { CATALOG_URL, CHECKOUT_URL, CART_URL } = process.env;


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
        source: '/catalog/:slug*',
        destination: `${CATALOG_URL}/:slug*`,
      },
      {
        source: '/checkout',
        destination: `${CHECKOUT_URL}`,
      },
      {
        source: '/cart',
        destination: `${CART_URL}`,
      },
    ]
  },
}