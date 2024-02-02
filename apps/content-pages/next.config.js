const { CATALOG_URL, CHECKOUT_URL, CART_URL, CHECKOUT_URLB } = process.env;


module.exports = {
  transpilePackages: ["@repo/ui", "@repo/layout"],

  async rewrites() {
    return [
      /**
       * Rewrites for Multi Zones
       */

      {
        source: '/checkout',
        destination: `${CHECKOUT_URL}/checkout`,
      },
      {
        source: '/checkout/:path*',
        destination: `${CHECKOUT_URL}/checkout/:path*`,
      },
      {
        source: '/cart',
        destination: `${CART_URL}/cart`,
      },
      {
        source: '/cart/:path*',
        destination: `${CART_URL}/cart/:path*`,
      },
      {
        source: '/catalog',
        destination: `${CATALOG_URL}/catalog`,
      },
      {
        source: '/catalog/:path*',
        destination: `${CATALOG_URL}/catalog/:path*`,
      },
    ]
  },
}