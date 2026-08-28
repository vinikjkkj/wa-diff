__d(
  "adsCreativeNativeCommerceExperienceAccessorsFactory",
  [
    "AdsAdObjectsAccessorUtils",
    "adCreativeAgenticCheckoutAccessorsFactory",
    "adCreativeProductBrowsingAccessorsFactory",
    "adCreativeShopAccessorsFactory",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return babelHelpers.extends(
        {},
        o("AdsAdObjectsAccessorUtils").baseFieldAccessorFactory(e, t),
        {
          agentic_checkout: r("adCreativeAgenticCheckoutAccessorsFactory")(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.agentic_checkout;
            },
            [].concat(t, ["agentic_checkout"]),
          ),
          product_browsing: r("adCreativeProductBrowsingAccessorsFactory")(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.product_browsing;
            },
            [].concat(t, ["product_browsing"]),
          ),
          shop: r("adCreativeShopAccessorsFactory")(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.shop;
            },
            [].concat(t, ["shop"]),
          ),
        },
      );
    }
    l.default = e;
  },
  98,
);
