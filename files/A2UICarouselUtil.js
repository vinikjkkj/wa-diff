__d(
  "A2UICarouselUtil",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new Set([
      "AD_CREATIVE",
      "POST",
      "MARKETPLACE_LISTING",
      "PRODUCT_ITEM",
    ]);
    function l(t) {
      return t.some(function (t) {
        return t.asset_type != null && e.has(t.asset_type);
      });
    }
    i.shouldRenderAsCarousel = l;
  },
  66,
);
