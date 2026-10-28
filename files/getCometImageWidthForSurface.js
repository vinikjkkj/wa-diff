__d(
  "getCometImageWidthForSurface",
  [
    "CometFeedAdImageWidths",
    "CometImagePrefetchSurfaces",
    "getCometFeedImageWidth",
    "getCometRHCAdImageWidth",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      return r("getCometRHCAdImageWidth")(e.innerWidth);
    }
    function u(e) {
      return o("CometFeedAdImageWidths").COMET_FEED_CAROUSEL_CARD_SIZE;
    }
    function c(e) {
      return o("CometFeedAdImageWidths")
        .COMET_FEED_PRODUCT_EXTENSIONS_CARD_SIZE;
    }
    function d(e) {
      return o("getCometFeedImageWidth").getCometFeedImageWidth(
        e.innerWidth,
        e.innerHeight,
      );
    }
    var m = new Map([
      [(e = o("CometImagePrefetchSurfaces")).SURFACE.COMET_HOME_FEED_IMAGE, d],
      [e.SURFACE.COMET_HOME_FEED_CAROUSEL, u],
      [e.SURFACE.COMET_HOME_FEED_PRODUCT_EXTENSIONS, c],
      [e.SURFACE.COMET_HOME_RHC, s],
    ]);
    function p(e, t, n) {
      if (e == null) return t;
      var r = m.get(e);
      if (r == null) return t;
      var o = r(n);
      return o;
    }
    l.default = p;
  },
  98,
);
