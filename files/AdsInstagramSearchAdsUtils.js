__d(
  "AdsInstagramSearchAdsUtils",
  ["IGAdsSensitiveVerticalsUtils", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = r("IGAdsSensitiveVerticalsUtils").is_pharma_vertical;
      return !e;
    }
    function s() {
      return !e() || r("gkx")("6371");
    }
    function u() {
      return !e() || r("gkx")("7594");
    }
    ((l.shouldEnableIGSearchFeedAdsInReelsChainCreation = e),
      (l.shouldShowSearchGridPreview = s),
      (l.shouldShowSearchGridPreviewWithoutExposure = u));
  },
  98,
);
