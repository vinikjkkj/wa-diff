__d(
  "adsAdKeywordsAccessorsFactory",
  ["AdsAdObjectsAccessorUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      return babelHelpers.extends(
        {},
        (n = o("AdsAdObjectsAccessorUtils")).baseFieldAccessorFactory(e, t),
        {
          banned_keywords: n.basicFieldAccessorFactory(e, t, "banned_keywords"),
          brands: n.basicFieldAccessorFactory(e, t, "brands"),
          product_categories: n.basicFieldAccessorFactory(
            e,
            t,
            "product_categories",
          ),
          product_categories_freeform: n.basicFieldAccessorFactory(
            e,
            t,
            "product_categories_freeform",
          ),
          product_categories_megataxon: n.basicFieldAccessorFactory(
            e,
            t,
            "product_categories_megataxon",
          ),
          product_names: n.basicFieldAccessorFactory(e, t, "product_names"),
          search_terms: n.basicFieldAccessorFactory(e, t, "search_terms"),
        },
      );
    }
    l.default = e;
  },
  98,
);
