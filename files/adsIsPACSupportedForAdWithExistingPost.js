__d(
  "adsIsPACSupportedForAdWithExistingPost",
  ["AdsAPIAdgroupRecordUtils", "ApiDynamicCreativeOptimizationTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t, n;
      return (
        o("AdsAPIAdgroupRecordUtils").isExistingPostAd(e) &&
        (((t = e.creative) == null || (t = t.asset_feed_spec) == null
          ? void 0
          : t.optimization_type) == null ||
          ((n = e.creative) == null || (n = n.asset_feed_spec) == null
            ? void 0
            : n.optimization_type) ===
            r("ApiDynamicCreativeOptimizationTypes").DOF_MESSAGING_DESTINATION)
      );
    }
    l.default = e;
  },
  98,
);
