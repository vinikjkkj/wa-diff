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
      return o(
        "CometFeedAdImageWidths",
      ).getCometFeedProductExtensionsCardWidth();
    }
    function d(e) {
      return o("CometFeedAdImageWidths").COMET_FEED_AD_FOOTER_THUMBNAIL_SIZE;
    }
    function m(e) {
      return o("getCometFeedImageWidth").getCometFeedImageWidth(
        e.innerWidth,
        e.innerHeight,
      );
    }
    var p = new Map([
      [(e = o("CometImagePrefetchSurfaces")).SURFACE.COMET_HOME_FEED_PHOTO, m],
      [e.SURFACE.COMET_HOME_FEED_SHARE_MEDIA, m],
      [e.SURFACE.COMET_HOME_FEED_CAROUSEL, u],
      [e.SURFACE.COMET_HOME_FEED_PRODUCT_EXTENSIONS, c],
      [e.SURFACE.COMET_HOME_RHC, s],
      [e.SURFACE.COMET_HOME_RHC_CAROUSEL, s],
      [e.SURFACE.COMET_HOME_FEED_AD_FOOTER, d],
    ]);
    function _(e, t, n) {
      if (e == null) return t;
      var r = p.get(e);
      if (r == null) return t;
      var o = r(n);
      return o;
    }
    l.default = _;
  },
  98,
);
